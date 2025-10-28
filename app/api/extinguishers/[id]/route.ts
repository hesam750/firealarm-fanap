import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function calculateStatus(expirationDate: string): "active" | "expired" | "warning" {
  const today = new Date()
  const expiry = new Date(expirationDate)
  const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (daysUntilExpiry < 0) return "expired"
  if (daysUntilExpiry <= 30) return "warning"
  return "active"
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()
    const updated = await prisma.extinguisher.update({
      where: { id },
      data: {
        location: body.location,
        floor: body.floor,
        x: Math.round(body.x),
        y: Math.round(body.y),
        chargeDate: new Date(body.chargeDate),
        expirationDate: new Date(body.expirationDate),
        lastInspection: body.lastInspection ? new Date(body.lastInspection) : undefined,
        notes: body.notes ?? undefined,
      },
    })
    const extinguisher = {
      id: updated.id,
      location: updated.location,
      floor: updated.floor,
      x: updated.x,
      y: updated.y,
      chargeDate: updated.chargeDate.toISOString(),
      expirationDate: updated.expirationDate.toISOString(),
      lastInspection: updated.lastInspection ? updated.lastInspection.toISOString() : undefined,
      notes: updated.notes ?? undefined,
      status: calculateStatus(updated.expirationDate.toISOString()),
    }
    return NextResponse.json({ extinguisher })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update extinguisher" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.extinguisher.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete extinguisher" }, { status: 500 })
  }
}
