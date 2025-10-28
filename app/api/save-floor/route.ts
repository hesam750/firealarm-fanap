import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

interface UpdateItem {
  key: string
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

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as { floor: "ground" | "first"; updates: UpdateItem[]; adds?: AddItem[]; deletes?: string[] }
    const { floor, updates, adds = [], deletes = [] } = body

    const root = process.cwd()
    const targetFile = floor === "ground"
      ? path.join(root, "components", "floor-plan-ground.tsx")
      : path.join(root, "components", "floor-plan-first.tsx")

    let content = fs.readFileSync(targetFile, "utf8")

    for (const upd of updates) {
      // Try rect first
      const rectRegex = new RegExp(
        `(<rect[^>]*data-shape-key="${upd.key}"[^>]*>)`,
        "m"
      )
      const rectMatch = content.match(rectRegex)
      if (rectMatch) {
        const rectTag = rectMatch[1]
        const newRectTag = rectTag
          .replace(/x="[-0-9.]+"/i, `x="${upd.x}"`)
          .replace(/y="[-0-9.]+"/i, `y="${upd.y}"`)
        content = content.replace(rectTag, newRectTag)
        continue
      }

      // Then try text elements
      const textRegex = new RegExp(
        `(<text[^>]*data-text-key="${upd.key}"[^>]*>)`,
        "m"
      )
      const textMatch = content.match(textRegex)
      if (textMatch) {
        const textTag = textMatch[1]
        const newTextTag = textTag
          .replace(/x="[-0-9.]+"/i, `x="${upd.x}"`)
          .replace(/y="[-0-9.]+"/i, `y="${upd.y}"`)
        content = content.replace(textTag, newTextTag)
      }
    }

    if (adds.length > 0) {
      const insertIndex = content.lastIndexOf("</svg>")
      const items = adds.map((a) => {
        if (a.type === "rect") {
          const fill = a.fill || "#f8fafc"
          const stroke = a.stroke || "#475569"
          return `      <rect data-shape-key="${a.key}" x="${a.x}" y="${a.y}" width="${a.width}" height="${a.height}" fill="${fill}" stroke="${stroke}" strokeWidth="1.5" />\n`
        } else {
          const anchor = a.anchor || "start"
          const className = a.className || "fill-slate-800 text-xs"
          const textContent = a.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")
          return `      <text data-text-key="${a.key}" x="${a.x}" y="${a.y}" textAnchor="${anchor}" className="${className}" style={{ fontFamily: 'system-ui' }}>${textContent}</text>\n`
        }
      }).join("")
      if (insertIndex !== -1) {
        content = content.slice(0, insertIndex) + items + content.slice(insertIndex)
      }
    }

    if (deletes.length > 0) {
      for (const key of deletes) {
        const esc = escapeRegExp(key)
        // Remove rects by shape key (self-closing)
        const rectRegex = new RegExp(`<rect[^>]*data-shape-key=\"${esc}\"[^>]*/>\\s*\\n?`, "m")
        content = content.replace(rectRegex, "")
        // Remove text blocks by text key
        const textRegex = new RegExp(`<text[^>]*data-text-key=\"${esc}\"[^>]*>[\\s\\S]*?<\\/text>\\s*\\n?`, "m")
        content = content.replace(textRegex, "")
      }
    }

    fs.writeFileSync(targetFile, content, "utf8")
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("save-floor error", err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}