import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

type Update = {
  id?: string
  location?: string
  x: number
  y: number
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { updates: Update[] }
    const { updates = [] } = body || {}

    if (!Array.isArray(updates) || updates.length === 0) {
      return NextResponse.json({ ok: false, error: "No updates provided" }, { status: 400 })
    }

    const root = process.cwd()
    const targetFile = path.join(root, "lib", "extinguisher-data.ts")

    let content = fs.readFileSync(targetFile, "utf8")

    const notFound: Array<{ id?: string; location?: string }> = []
    let updatedCount = 0

    for (const upd of updates) {
      const key = (upd.location || "").trim()

      if (!key) {
        // If only id provided, we can't map it back because lib data has no ids
        notFound.push({ id: upd.id, location: upd.location })
        continue
      }

      const escapedLocation = escapeRegExp(key)
      const objRegex = new RegExp(
        `(\{[^}]*?location:\s*\"${escapedLocation}\"[\s\S]*?\})`,
        "m",
      )

      const match = content.match(objRegex)
      if (!match) {
        notFound.push({ id: upd.id, location: upd.location })
        continue
      }

      const objBlock = match[1]
      const newObjBlock = objBlock
        // update x
        .replace(/x:\s*[-\d.]+/i, `x: ${Math.round(upd.x)}`)
        // update y
        .replace(/y:\s*[-\d.]+/i, `y: ${Math.round(upd.y)}`)

      if (newObjBlock !== objBlock) {
        content = content.replace(objBlock, newObjBlock)
        updatedCount += 1
      } else {
        notFound.push({ id: upd.id, location: upd.location })
      }
    }

    fs.writeFileSync(targetFile, content, "utf8")

    return NextResponse.json({ ok: true, updated: updatedCount, notFound })
  } catch (err) {
    console.error("save-extinguishers error", err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}