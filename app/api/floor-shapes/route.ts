import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const floor = searchParams.get("floor") as "ground" | "first" | null
    if (!floor || (floor !== "ground" && floor !== "first")) {
      return NextResponse.json({ ok: false, error: "floor query is required" }, { status: 400 })
    }

    const shapes = await prisma.floorShape.findMany({ where: { floor } })
    return NextResponse.json({ ok: true, shapes })
  } catch (err) {
    console.error("floor-shapes GET error", err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}