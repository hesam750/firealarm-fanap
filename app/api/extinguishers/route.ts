import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import type { Extinguisher } from "@/types/extinguisher"

function calculateStatus(expirationDate: string): "active" | "expired" | "warning" {
  const today = new Date()
  const expiry = new Date(expirationDate)
  const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (daysUntilExpiry < 0) return "expired"
  if (daysUntilExpiry <= 30) return "warning"
  return "active"
}

export async function GET() {
  try {
    const rows = await prisma.extinguisher.findMany({ orderBy: { createdAt: "desc" } })
    const extinguishers: Extinguisher[] = rows.map((e: typeof rows[number]) => ({
      id: e.id,
      location: e.location,
      floor: e.floor as Extinguisher["floor"],
      x: e.x,
      y: e.y,
      chargeDate: e.chargeDate.toISOString(),
      expirationDate: e.expirationDate.toISOString(),
      lastInspection: e.lastInspection ? e.lastInspection.toISOString() : undefined,
      notes: e.notes ?? undefined,
      status: calculateStatus(e.expirationDate.toISOString()),
    }))
    return NextResponse.json({ extinguishers })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch extinguishers" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Omit<Extinguisher, "id" | "status">
    const created = await prisma.extinguisher.create({
      data: {
        location: body.location,
        floor: body.floor as any,
        x: Math.round(body.x),
        y: Math.round(body.y),
        chargeDate: new Date(body.chargeDate),
        expirationDate: new Date(body.expirationDate),
        lastInspection: body.lastInspection ? new Date(body.lastInspection) : undefined,
        notes: body.notes ?? undefined,
      },
    })
    const extinguisher: Extinguisher = {
      id: created.id,
      location: created.location,
      floor: created.floor as any,
      x: created.x,
      y: created.y,
      chargeDate: created.chargeDate.toISOString(),
      expirationDate: created.expirationDate.toISOString(),
      lastInspection: created.lastInspection ? created.lastInspection.toISOString() : undefined,
      notes: created.notes ?? undefined,
      status: calculateStatus(created.expirationDate.toISOString()),
    }
    return NextResponse.json({ extinguisher }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create extinguisher" }, { status: 500 })
  }
}
