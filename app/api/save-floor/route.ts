import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

interface UpdateItem {
  key: string
  type: "rect" | "text"
  x: number
  y: number
}

type AddItem =
  | {
      type: "rect"
      key: string
      x: number
      y: number
      width: number
      height: number
      fill?: string
      stroke?: string
    }
  | {
      type: "text"
      key: string
      x: number
      y: number
      text: string
      anchor?: "start" | "middle" | "end"
      className?: string
    }

function sanitizeInt(n: number) {
  return Math.round(Number.isFinite(n) ? n : 0)
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as { floor: "ground" | "first"; updates: UpdateItem[]; adds?: AddItem[]; deletes?: string[] }
    const { floor, updates, adds = [], deletes = [] } = body

    // Process updates: upsert by key
    for (const upd of updates) {
      await prisma.floorShape.upsert({
        where: { key: upd.key },
        update: { x: sanitizeInt(upd.x), y: sanitizeInt(upd.y), type: upd.type, floor },
        create: { key: upd.key, floor, type: upd.type, x: sanitizeInt(upd.x), y: sanitizeInt(upd.y) },
      })
    }

    // Process adds: upsert with attributes
    for (const a of adds) {
      if (a.type === "rect") {
        await prisma.floorShape.upsert({
          where: { key: a.key },
          update: {
            type: "rect",
            floor,
            x: sanitizeInt(a.x),
            y: sanitizeInt(a.y),
            width: sanitizeInt(a.width),
            height: sanitizeInt(a.height),
            fill: a.fill ?? "#f8fafc",
            stroke: a.stroke ?? "#475569",
            deleted: false,
          },
          create: {
            key: a.key,
            type: "rect",
            floor,
            x: sanitizeInt(a.x),
            y: sanitizeInt(a.y),
            width: sanitizeInt(a.width),
            height: sanitizeInt(a.height),
            fill: a.fill ?? "#f8fafc",
            stroke: a.stroke ?? "#475569",
          },
        })
      } else {
        await prisma.floorShape.upsert({
          where: { key: a.key },
          update: {
            type: "text",
            floor,
            x: sanitizeInt(a.x),
            y: sanitizeInt(a.y),
            text: a.text,
            anchor: a.anchor ?? "start",
            className: a.className ?? "fill-slate-800 text-xs",
            deleted: false,
          },
          create: {
            key: a.key,
            type: "text",
            floor,
            x: sanitizeInt(a.x),
            y: sanitizeInt(a.y),
            text: a.text,
            anchor: a.anchor ?? "start",
            className: a.className ?? "fill-slate-800 text-xs",
          },
        })
      }
    }

    // Process deletes: mark deleted
    if (deletes.length > 0) {
      await prisma.floorShape.updateMany({ where: { key: { in: deletes }, floor }, data: { deleted: true } })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("save-floor error", err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}