"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Move, Square, Trash2, Save, Palette, Type as TypeIcon } from "lucide-react"
import type { Extinguisher } from "@/types/extinguisher"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { FloorPlanGround } from "./floor-plan-ground"
import { FloorPlanFirst } from "./floor-plan-first"
import AnimatedGridPattern from "./ui/animated-grid-pattern"
import SpotlightCursor from "./ui/spotlight-cursor"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

interface FloorPlanViewerProps {
  extinguishers: Extinguisher[]
  onExtinguisherClick?: (extinguisher: Extinguisher) => void
  // کلیک روی نقشه برای افزودن کپسول جدید در مختصات انتخاب‌شده
  onMapClickAddExtinguisher?: (floor: "ground" | "first", xPercent: number, yPercent: number) => void
  editable?: boolean
  cardClassName?: string
  background?: "panel" | "transparent"
}

type AddItem =
  | {
      type: "rect"
      key: string
      x: number
      y: number
      width: number
      height: number
      fill: string
      stroke: string
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

export function FloorPlanViewer({ extinguishers, onExtinguisherClick, onMapClickAddExtinguisher, editable = false, cardClassName, background = "panel" }: FloorPlanViewerProps) {
  const { toast } = useToast()
  const [selectedFloor, setSelectedFloor] = useState<"ground" | "first">("ground")
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [dragMode, setDragMode] = useState<boolean>(false)
  const [drawMode, setDrawMode] = useState<boolean>(false)
  const [textMode, setTextMode] = useState<boolean>(false)
  const [drawFillColor, setDrawFillColor] = useState<string>("rgba(100, 100, 255, 0.3)")
  const [drawStrokeColor, setDrawStrokeColor] = useState<string>("blue")
  const [deleteMode, setDeleteMode] = useState<boolean>(false)
  const [pendingAdds, setPendingAdds] = useState<AddItem[]>([])
  const [pendingDeletes, setPendingDeletes] = useState<string[]>([])
  const [textInput, setTextInput] = useState<string>("")
  const [textX, setTextX] = useState<string>("")
  const [textY, setTextY] = useState<string>("")
  const [textPromptOpen, setTextPromptOpen] = useState<boolean>(false)
  const [clickX, setClickX] = useState<number | null>(null)
  const [clickY, setClickY] = useState<number | null>(null)

  const groundFloorExtinguishers = extinguishers.filter((ext) => ext.floor === "ground")
  const firstFloorExtinguishers = extinguishers.filter((ext) => ext.floor === "first")

  // Local marker positions for drag mode
  const [markerPositions, setMarkerPositions] = useState<Record<string, { x: number; y: number }>>({})
  const groundContainerRef = useRef<HTMLDivElement | null>(null)
  const firstContainerRef = useRef<HTMLDivElement | null>(null)
  const draggingMarkerRef = useRef<{ id: string; startX: number; startY: number; origX: number; origY: number } | null>(null)

  useEffect(() => {
    // Initialize local positions from props when extinguishers change
    const init: Record<string, { x: number; y: number }> = {}
    for (const ext of extinguishers) {
      init[ext.id] = { x: ext.x, y: ext.y }
    }
    setMarkerPositions(init)
  }, [extinguishers])

  const getStatusColor = (status: Extinguisher["status"]) => {
    switch (status) {
      case "active":
        return "bg-emerald-500 hover:bg-emerald-600"
      case "warning":
        return "bg-amber-500 hover:bg-amber-600"
      case "expired":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const getStatusFill = (status: Extinguisher["status"]) => {
    switch (status) {
      case "active":
        return "#10b981" // emerald
      case "warning":
        return "#f59e0b" // amber
      case "expired":
        return "#ef4444" // red
      default:
        return "#9ca3af" // gray
    }
  }

  // Editor mode: single selection mapping to existing booleans
  const selectedMode: "none" | "move" | "draw" | "text" | "delete" = dragMode ? "move" : drawMode ? "draw" : textMode ? "text" : deleteMode ? "delete" : "none"
  function setMode(mode: "none" | "move" | "draw" | "text" | "delete") {
    setDragMode(mode === "move")
    setDrawMode(mode === "draw")
    setTextMode(mode === "text")
    setDeleteMode(mode === "delete")
  }

  function onMarkerPointerDown(e: React.PointerEvent<HTMLButtonElement>, ext: Extinguisher, container: HTMLDivElement | null) {
    if (!editable || !dragMode || !container) return
    e.preventDefault()
    const pos = markerPositions[ext.id] || { x: ext.x, y: ext.y }
    draggingMarkerRef.current = { id: ext.id, startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y }
    ;(e.currentTarget as any).setPointerCapture?.(e.pointerId)
  }

  function onMarkerPointerMove(e: React.PointerEvent<HTMLButtonElement>, container: HTMLDivElement | null) {
    if (!editable || !dragMode || !container) return
    const drag = draggingMarkerRef.current
    if (!drag) return
    const rect = container.getBoundingClientRect()
    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    const dxPercent = (dx / rect.width) * 100
    const dyPercent = (dy / rect.height) * 100
    setMarkerPositions((prev) => ({
      ...prev,
      [drag.id]: { x: Math.max(0, Math.min(100, drag.origX + dxPercent)), y: Math.max(0, Math.min(100, drag.origY + dyPercent)) },
    }))
  }

  function onMarkerPointerUp(ext: Extinguisher) {
    if (!editable) return
    const drag = draggingMarkerRef.current
    if (!drag) return
    
    const pos = markerPositions[drag.id] || { x: ext.x, y: ext.y }
    // ذخیره در پایگاه‌داده (Prisma)
    console.log("ذخیره‌سازی موقعیت کپسول:", ext.location, "در مختصات:", pos.x, pos.y)
    fetch(`/api/extinguishers/${ext.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: ext.location,
        floor: ext.floor,
        x: Math.round(pos.x),
        y: Math.round(pos.y),
        chargeDate: ext.chargeDate,
        expirationDate: ext.expirationDate,
        lastInspection: ext.lastInspection,
        notes: ext.notes,
      }),
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(JSON.stringify(result));
        console.log("کپسول ذخیره شد:", ext.location, "نتیجه:", result);
        toast({
          title: "مختصات کپسول ذخیره شد",
          description: `${ext.location} در مختصات جدید ثبت شد`,
        })
      })
      .catch((err) => {
        console.error("خطا در ذخیره کپسول:", err)
        toast({
          title: "خطا در ذخیره کپسول",
          description: "مشکلی هنگام ذخیره‌سازی موقعیت رخ داد",
          variant: "destructive",
        })
      })
    
    draggingMarkerRef.current = null
  }

  const renderExtinguisherMarkers = (floorExtinguishers: Extinguisher[], containerRef: React.RefObject<HTMLDivElement | null>) => {
    return floorExtinguishers.map((ext) => {
          const pos = markerPositions[ext.id] || { x: ext.x, y: ext.y }
          return (
            <button
              key={ext.id}
              className={cn(
            "absolute p-0 bg-transparent transition-transform duration-200 cursor-pointer z-10 rounded-full pointer-events-auto",
            hoveredId === ext.id && "scale-125 z-20",
              )}
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
              onClick={() => !dragMode && onExtinguisherClick?.(ext)}
              onMouseEnter={() => setHoveredId(ext.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`کپسول ${ext.location}`}
              onPointerDown={(e) => onMarkerPointerDown(e, ext, containerRef.current)}
              onPointerMove={(e) => onMarkerPointerMove(e, containerRef.current)}
              onPointerUp={() => onMarkerPointerUp(ext)}
            >
          <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="8" y="9" width="8" height="12" rx="2" fill={getStatusFill(ext.status)} stroke="#111827" strokeWidth="1" />
            <rect x="10" y="7" width="4" height="2" fill="#111827" />
            <path d="M14 8 L18 6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 6 C 20 7 20 10 18 11" stroke="#111827" strokeWidth="1" fill="none" />
          </svg>
          {hoveredId === ext.id && !dragMode && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
              <div className="font-semibold">{ext.location}</div>
              <div className="text-xs text-gray-300">انقضا: {new Date(ext.expirationDate).toLocaleDateString("fa-IR")}</div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" style={{ marginTop: "-1px" }} />
            </div>
          )}
        </button>
      )
    })
  }

  // Generic SVG drag: translate any clicked SVG element
  const svgDragRef = useRef<{ el: SVGGraphicsElement | null; startX: number; startY: number; baseTx: number; baseTy: number } | null>(null)
  const drawingRef = useRef<{ startX: number; startY: number; rect: SVGRectElement | null } | null>(null)

  function attachSvgHandlers(container: HTMLDivElement | null) {
    if (!container) return
    const svg = container.querySelector(`svg[data-floor="${selectedFloor}"]`) as SVGSVGElement | null
    if (!svg) return
    console.log("[FloorPlanViewer] attachSvgHandlers", { floor: selectedFloor, dragMode, drawMode, textMode, deleteMode })
    
    svg.onpointerdown = (e: PointerEvent) => {
      console.log("[FloorPlanViewer] pointerdown", { tag: (e.target as Element)?.tagName, dragMode, drawMode, textMode, deleteMode })
      // Handle delete mode (priority over other modes)
      if (deleteMode) {
        const targetEl = (e.target as Element)?.closest('[data-shape-key], [data-text-key]') as SVGGraphicsElement | null
        if (targetEl) {
          const key = targetEl.getAttribute('data-shape-key') || targetEl.getAttribute('data-text-key')
          if (key) {
            setPendingDeletes((prev) => (prev.includes(key) ? prev : [...prev, key]))
            // Hide locally to avoid React removing nodes during commit in dev/StrictMode
            targetEl.setAttribute('data-deleted', 'true')
            const prevStyle = targetEl.getAttribute('style') || ''
            if (!/display\s*:\s*none/.test(prevStyle)) {
              targetEl.setAttribute('style', `${prevStyle}${prevStyle ? '; ' : ''}display: none`)
            }
            // Auto-save deletion
            setTimeout(() => collectAndSaveChanges(), 100)
          }
        }
        return
      }
      // Handle text add mode
      if (textMode) {
        const svgRect = svg.getBoundingClientRect()
        const svgX = (e.clientX - svgRect.left) / svgRect.width * svg.viewBox.baseVal.width
        const svgY = (e.clientY - svgRect.top) / svgRect.height * svg.viewBox.baseVal.height
        console.log("[FloorPlanViewer] open text dialog at", { svgX, svgY })
        setClickX(svgX)
        setClickY(svgY)
        setTextPromptOpen(true)
        return
      }
      // Click-to-add extinguisher: when editable and no other mode is active
      if (editable && !dragMode && !drawMode && !textMode && !deleteMode && onMapClickAddExtinguisher) {
        const containerRect = container.getBoundingClientRect()
        const xPercent = ((e.clientX - containerRect.left) / containerRect.width) * 100
        const yPercent = ((e.clientY - containerRect.top) / containerRect.height) * 100
        onMapClickAddExtinguisher(selectedFloor, Math.round(xPercent), Math.round(yPercent))
        return
      }
      // Handle drawing mode
      if (drawMode) {
        const rect = svg.createSVGRect()
        const pt = svg.createSVGPoint()
        pt.x = e.clientX
        pt.y = e.clientY
        
        // Convert client coordinates to SVG coordinates
        const svgRect = svg.getBoundingClientRect()
        const svgX = (e.clientX - svgRect.left) / svgRect.width * svg.viewBox.baseVal.width
        const svgY = (e.clientY - svgRect.top) / svgRect.height * svg.viewBox.baseVal.height
        
        // Create a new rectangle element
        const newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        newRect.setAttribute("x", String(svgX))
        newRect.setAttribute("y", String(svgY))
        newRect.setAttribute("width", "0")
        newRect.setAttribute("height", "0")
        newRect.setAttribute("fill", drawFillColor)
        newRect.setAttribute("stroke", drawStrokeColor)
        newRect.setAttribute("stroke-width", "1")
        // Assign a unique key so this new rect can be saved and updated later
        const genKey = `rect-${selectedFloor}-${Date.now()}`
        newRect.setAttribute("data-shape-key", genKey)
        
        svg.appendChild(newRect)
        drawingRef.current = { startX: svgX, startY: svgY, rect: newRect }
        return
      }
      
      // Handle drag mode
      if (!dragMode) return
      const target = e.target as SVGGraphicsElement
      if (!target || target.tagName === "svg") return
      
      // Check if it's a draggable element (rect or text)
      if (target.tagName !== "rect" && target.tagName !== "text") return
      
      // Store original position as data attributes for reference
      const xAttr = target.getAttribute("x")
      const yAttr = target.getAttribute("y")
      if (xAttr && yAttr) {
        target.setAttribute("data-original-x", xAttr)
        target.setAttribute("data-original-y", yAttr)
      }
      
      const currentTransform = target.getAttribute("transform") || ""
      const match = /translate\(([-0-9.]+)[ ,]([-0-9.]+)\)/.exec(currentTransform)
      const baseTx = match ? parseFloat(match[1]) : 0
      const baseTy = match ? parseFloat(match[2]) : 0
      svgDragRef.current = { el: target, startX: e.clientX, startY: e.clientY, baseTx, baseTy }
      target.setPointerCapture?.(e.pointerId as any)
    }
    
    svg.onpointermove = (e: PointerEvent) => {
      // Debug
      // console.log("[FloorPlanViewer] pointermove", { dragMode, drawing: !!drawingRef.current })
      // Handle drawing mode
      if (drawMode && drawingRef.current) {
        const { startX, startY, rect } = drawingRef.current
        if (!rect) return
        
        // Convert client coordinates to SVG coordinates
        const svgRect = svg.getBoundingClientRect()
        const svgX = (e.clientX - svgRect.left) / svgRect.width * svg.viewBox.baseVal.width
        const svgY = (e.clientY - svgRect.top) / svgRect.height * svg.viewBox.baseVal.height
        
        // Calculate width and height
        const width = Math.abs(svgX - startX)
        const height = Math.abs(svgY - startY)
        
        // Set the new x and y if needed (for negative direction drawing)
        const x = svgX < startX ? svgX : startX
        const y = svgY < startY ? svgY : startY
        
        rect.setAttribute("x", String(x))
        rect.setAttribute("y", String(y))
        rect.setAttribute("width", String(width))
        rect.setAttribute("height", String(height))
        return
      }
      
      // Handle drag mode
      if (!dragMode) return
      const drag = svgDragRef.current
      if (!drag || !drag.el) return
      const dx = e.clientX - drag.startX
      const dy = e.clientY - drag.startY
      const tx = drag.baseTx + dx
      const ty = drag.baseTy + dy
      const other = drag.el.getAttribute("transform") || ""
      const cleaned = other.replace(/translate\(([^)]+)\)/, "").trim()
      const newTransform = `${cleaned ? cleaned + " " : ""}translate(${tx} ${ty})`
      drag.el.setAttribute("transform", newTransform)
    }
    
    svg.onpointerup = (e: PointerEvent) => {
      // console.log("[FloorPlanViewer] pointerup")
      // Finalize drawing
      if (drawMode && drawingRef.current) {
        const { rect } = drawingRef.current
        if (rect) {
          const x = parseFloat(rect.getAttribute("x") || "0")
          const y = parseFloat(rect.getAttribute("y") || "0")
          const width = parseFloat(rect.getAttribute("width") || "0")
          const height = parseFloat(rect.getAttribute("height") || "0")
          
          // Only add if the rectangle has some size
          if (width > 5 && height > 5) {
            const keyAttr = rect.getAttribute("data-shape-key") || `rect-${selectedFloor}-${Date.now()}`
            setPendingAdds(prev => [...prev, {
              type: "rect",
              key: keyAttr,
              x, y, width, height,
              fill: rect.getAttribute("fill") || drawFillColor,
              stroke: rect.getAttribute("stroke") || drawStrokeColor,
            }])
            
            // Auto-save after drawing
            setTimeout(() => collectAndSaveChanges(), 100)
          } else {
            // Hide tiny rectangles instead of removing to avoid React DOM conflicts
            rect.setAttribute('data-deleted', 'true')
            const prevStyle = rect.getAttribute('style') || ''
            if (!/display\s*:\s*none/.test(prevStyle)) {
              rect.setAttribute('style', `${prevStyle}${prevStyle ? '; ' : ''}display: none`)
            }
          }
        }
        drawingRef.current = null
      } else if (svgDragRef.current) {
        // Save the final position when drag ends
        const { el } = svgDragRef.current
        if (el) {
          // Automatically save changes when drag ends
          console.log("[FloorPlanViewer] drag finished, saving changes")
          setTimeout(() => collectAndSaveChanges(), 100)
        }
        svgDragRef.current = null
      }
    }
  }

  function addTextAtCoordinates() {
    if (!editable) return
    const container = selectedFloor === "ground" ? groundContainerRef.current : firstContainerRef.current
    if (!container) return
    const svg = container.querySelector(`svg[data-floor="${selectedFloor}"]`) as SVGSVGElement | null
    if (!svg) return

    const content = textInput.trim()
    if (!content) {
      toast({ title: "متن خالی است", description: "ابتدا متن را وارد کنید", variant: "destructive" })
      return
    }
    const x = parseFloat(textX)
    const y = parseFloat(textY)
    if (Number.isNaN(x) || Number.isNaN(y)) {
      toast({ title: "مختصات نامعتبر", description: "X و Y را به‌صورت عدد وارد کنید", variant: "destructive" })
      return
    }

    const newText = document.createElementNS("http://www.w3.org/2000/svg", "text")
    const genKey = `text-${selectedFloor}-${Date.now()}`
    newText.setAttribute("data-text-key", genKey)
    newText.setAttribute("x", String(x))
    newText.setAttribute("y", String(y))
    newText.setAttribute("text-anchor", "start")
    newText.setAttribute("class", "fill-slate-800 text-xs")
    newText.setAttribute("style", "font-family: system-ui")
    newText.textContent = content
    svg.appendChild(newText)

    setPendingAdds(prev => [...prev, { type: "text", key: genKey, x, y, text: content }])
    setTimeout(() => collectAndSaveChanges(), 100)
  }

  function confirmAddTextFromPrompt() {
    if (!editable) return
    if (clickX === null || clickY === null) {
      toast({ title: "مختصات یافت نشد", description: "ابتدا روی نقشه کلیک کنید", variant: "destructive" })
      return
    }
    const container = selectedFloor === "ground" ? groundContainerRef.current : firstContainerRef.current
    if (!container) return
    const svg = container.querySelector(`svg[data-floor="${selectedFloor}"]`) as SVGSVGElement | null
    if (!svg) return

    const content = textInput.trim()
    if (!content) {
      toast({ title: "متن خالی است", description: "متن را وارد کنید", variant: "destructive" })
      return
    }

    const newText = document.createElementNS("http://www.w3.org/2000/svg", "text")
    const genKey = `text-${selectedFloor}-${Date.now()}`
    newText.setAttribute("data-text-key", genKey)
    newText.setAttribute("x", String(clickX))
    newText.setAttribute("y", String(clickY))
    newText.setAttribute("text-anchor", "start")
    newText.setAttribute("class", "fill-slate-800 text-xs")
    newText.setAttribute("style", "font-family: system-ui")
    newText.textContent = content
    svg.appendChild(newText)

    setPendingAdds(prev => [...prev, { type: "text", key: genKey, x: clickX!, y: clickY!, text: content }])

    setTextPromptOpen(false)
    setClickX(null)
    setClickY(null)

    // Auto-save
    setTimeout(() => collectAndSaveChanges(), 100)
  }

  useEffect(() => {
    // attach handlers when drag/draw mode toggles or floor changes (only in editable mode)
    if (!editable) return
    if (selectedFloor === "ground") attachSvgHandlers(groundContainerRef.current!)
    else attachSvgHandlers(firstContainerRef.current!)
  }, [dragMode, drawMode, textMode, deleteMode, selectedFloor, editable])

  function collectAndSaveChanges() {
    if (!editable) return
    const container = selectedFloor === "ground" ? groundContainerRef.current : firstContainerRef.current
    if (!container) return
    const svg = container.querySelector(`svg[data-floor="${selectedFloor}"]`) as SVGSVGElement | null
    if (!svg) return
    
    // Collect shape updates
    const shapeElements = Array.from(svg.querySelectorAll('[data-shape-key]:not([data-deleted="true"])')) as SVGGraphicsElement[]
    const updates: { key: string; x: number; y: number }[] = []
    
    for (const el of shapeElements) {
      const key = el.getAttribute("data-shape-key")
      if (!key) continue
      const txMatch = /translate\(([-0-9.]+)[ ,]([-0-9.]+)\)/.exec(el.getAttribute("transform") || "")
      const xAttr = el.getAttribute("x")
      const yAttr = el.getAttribute("y")
      if (!xAttr || !yAttr) continue
      const baseX = parseFloat(xAttr)
      const baseY = parseFloat(yAttr)
      const tx = txMatch ? parseFloat(txMatch[1]) : 0
      const ty = txMatch ? parseFloat(txMatch[2]) : 0
      const newX = Math.round(baseX + tx)
      const newY = Math.round(baseY + ty)
      
      // Always push updates for shapes, even if no movement
      updates.push({ key, x: newX, y: newY })
    }
    
    // Collect text updates
    const textElements = Array.from(svg.querySelectorAll('[data-text-key]:not([data-deleted="true"])')) as SVGGraphicsElement[]
    for (const el of textElements) {
      const key = el.getAttribute("data-text-key")
      if (!key) continue
      const txMatch = /translate\(([-0-9.]+)[ ,]([-0-9.]+)\)/.exec(el.getAttribute("transform") || "")
      const xAttr = el.getAttribute("x")
      const yAttr = el.getAttribute("y")
      if (!xAttr || !yAttr) continue
      const baseX = parseFloat(xAttr)
      const baseY = parseFloat(yAttr)
      const tx = txMatch ? parseFloat(txMatch[1]) : 0
      const ty = txMatch ? parseFloat(txMatch[2]) : 0
      const newX = Math.round(baseX + tx)
      const newY = Math.round(baseY + ty)
      
      // Always push updates for text elements, even if no movement
      updates.push({ key, x: newX, y: newY })
    }
    
    // Always proceed with saving if in drag mode or draw/delete mode or there are adds/deletes
    if (updates.length === 0 && pendingAdds.length === 0 && pendingDeletes.length === 0 && !dragMode && !drawMode && !deleteMode) return
    
    // Log the updates being sent to the server
    console.log("Sending updates to server:", { updates, pendingAdds, pendingDeletes })
    
    fetch("/api/save-floor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        floor: selectedFloor, 
        updates,
        adds: pendingAdds.length > 0 ? pendingAdds : undefined,
        deletes: pendingDeletes.length > 0 ? pendingDeletes : undefined,
      }),
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw new Error(JSON.stringify(result));
        console.log("Save result:", result);
        
        if (result.ok) {
          // On success, apply x/y and clear translate locally for crisp UI
          for (const el of [...shapeElements, ...textElements]) {
            const key = el.getAttribute("data-shape-key") || el.getAttribute("data-text-key")
            const upd = updates.find((u) => u.key === key)
            if (!upd) continue
            
            // Update the element's base position
            el.setAttribute("x", String(upd.x))
            el.setAttribute("y", String(upd.y))
            
            // Clear the transform completely
            el.setAttribute("transform", "")
          }
          
          // Clear pending adds after saving
          if (pendingAdds.length > 0) {
            setPendingAdds([])
          }
          // Clear pending deletes after saving
          if (pendingDeletes.length > 0) {
            setPendingDeletes([])
          }
          
          console.log("Save successful, elements updated")
          toast({
            title: "تغییرات نقشه ذخیره شد",
            description: "موقعیت‌ها، اضافه‌ها و حذف‌ها با موفقیت ثبت شدند",
          })
        } else {
          console.error("Save failed:", result)
          toast({
            title: "خطا در ثبت تغییرات",
            description: "ثبت تغییرات نقشه با مشکل مواجه شد",
            variant: "destructive",
          })
        }
      })
      .catch((err) => {
        console.error("Error saving changes:", err)
        toast({
          title: "خطا در ثبت تغییرات",
          description: "مشکلی هنگام ذخیره‌سازی تغییرات رخ داد",
          variant: "destructive",
        })
      })
  }

  return (
    <Card className={cn("p-6", cardClassName)}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">نقشه ساختمان</h2>
          <div className="flex items-center gap-3">
            {editable && (
              <div className="flex items-center gap-2">
                <ToggleGroup
                  type="single"
                  value={selectedMode}
                  onValueChange={(v) => setMode((v as any) || "none")}
                  variant="outline"
                  size="sm"
                >
                  <ToggleGroupItem value="move" aria-label="حالت جابه‌جایی">
                    <Move className="w-4 h-4 ml-1" />
                    جابه‌جایی
                  </ToggleGroupItem>
                  <ToggleGroupItem value="draw" aria-label="حالت رسم مستطیل">
                    <Square className="w-4 h-4 ml-1" />
                    رسم
                  </ToggleGroupItem>
                  <ToggleGroupItem value="text" aria-label="حالت افزودن متن">
                    <TypeIcon className="w-4 h-4 ml-1" />
                    متن
                  </ToggleGroupItem>
                  <ToggleGroupItem value="delete" aria-label="حالت حذف شکل" className="text-destructive">
                    <Trash2 className="w-4 h-4 ml-1" />
                    حذف
                  </ToggleGroupItem>
                </ToggleGroup>

                {drawMode && (
                  <div className="flex items-center gap-2 ml-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Palette className="w-3 h-3" />
                      رنگ
                    </Badge>
                    {[
                      { fill: "#f8fafc", stroke: "#475569" },
                      { fill: "#eef2ff", stroke: "#475569" },
                      { fill: "#fff7ed", stroke: "#d97706" },
                      { fill: "#dcfce7", stroke: "#166534" },
                      { fill: "rgba(100, 100, 255, 0.3)", stroke: "blue" },
                      { fill: "#ffe4e6", stroke: "#be123c" },
                    ].map((c) => (
                      <button
                        key={`${c.fill}-${c.stroke}`}
                        className={cn(
                          "w-5 h-5 rounded border",
                          drawFillColor === c.fill && drawStrokeColor === c.stroke ? "ring-2 ring-ring" : ""
                        )}
                        style={{ backgroundColor: c.fill, borderColor: c.stroke }}
                        onClick={() => { setDrawFillColor(c.fill); setDrawStrokeColor(c.stroke) }}
                        aria-label={`انتخاب رنگ`}
                        title={`fill: ${c.fill}`}
                      />
                    ))}
                  </div>
                )}

                {textMode && (
                  <div className="flex items-center gap-2 ml-2">
                    <input
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="متن"
                      className="h-8 px-2 py-1 rounded border bg-background"
                      aria-label="ورود متن"
                      style={{ minWidth: 160 }}
                    />
                    <input
                      type="number"
                      value={textX}
                      onChange={(e) => setTextX(e.target.value)}
                      placeholder="X"
                      className="h-8 px-2 py-1 rounded border bg-background w-24"
                      aria-label="مختصات X"
                    />
                    <input
                      type="number"
                      value={textY}
                      onChange={(e) => setTextY(e.target.value)}
                      placeholder="Y"
                      className="h-8 px-2 py-1 rounded border bg-background w-24"
                      aria-label="مختصات Y"
                    />
                    <Button variant="outline" size="sm" onClick={addTextAtCoordinates}>
                      قراردهی در مختصات
                    </Button>
                  </div>
                )}

                <Button
                  onClick={collectAndSaveChanges}
                  disabled={pendingAdds.length === 0 && pendingDeletes.length === 0 && !dragMode && !drawMode && !textMode && !deleteMode}
                  className="ml-2"
                >
                  <Save className="w-4 h-4 ml-2" />
                  ثبت تغییرات
                </Button>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs">
              <Badge className="bg-emerald-500">فعال</Badge>
              <Badge className="bg-amber-500">هشدار</Badge>
              <Badge className="bg-red-500">منقضی</Badge>
            </div>
          </div>
        </div>

        <Dialog open={textPromptOpen} onOpenChange={setTextPromptOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>افزودن متن</DialogTitle>
              <DialogDescription>روی نقشه کلیک کردید؛ متن را وارد کنید و تایید کنید</DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <input
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="متن"
                className="h-9 px-3 py-2 rounded border bg-background w-full"
                aria-label="متن"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setTextPromptOpen(false)}>انصراف</Button>
              <Button onClick={confirmAddTextFromPrompt}>افزودن</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Tabs value={selectedFloor} onValueChange={(v) => setSelectedFloor(v as "ground" | "first")}> 
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ground">طبقه همکف ({groundFloorExtinguishers.length})</TabsTrigger>
            <TabsTrigger value="first">طبقه اول ({firstFloorExtinguishers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="ground" className="mt-4">
            <div
              ref={groundContainerRef}
              className={cn(
                "relative w-full rounded-lg overflow-hidden",
                background === "panel" ? "bg-gray-50 border-2 border-gray-200" : "bg-transparent border-0"
              )}
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                const x = ((e.clientX - r.left) / r.width) * 100
                const y = ((e.clientY - r.top) / r.height) * 100
                ;(e.currentTarget as HTMLDivElement).style.setProperty("--cursor-x", `${x}%`)
                ;(e.currentTarget as HTMLDivElement).style.setProperty("--cursor-y", `${y}%`)
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                {/* Magic UI–style animated grid background */}
                <AnimatedGridPattern className="absolute inset-0 text-slate-400 dark:text-slate-700 pointer-events-none" strokeColor="currentColor" cellSize={28} opacity={0.18} />

                {/* Subtle dark overlay to improve contrast */}
                <div className="absolute inset-0 bg-black/6 dark:bg-black/25 pointer-events-none" />

                {/* Floor plan */}
                <div className="absolute inset-0">
                  <FloorPlanGround />
                </div>

                {/* Premium spotlight that follows cursor */}
                <SpotlightCursor className="absolute inset-0" color={"255, 131, 0"} radius={560} intensity={0.14} />

                {/* Extinguisher markers overlay. Keep container non-interactive so SVG beneath receives events; buttons themselves are interactive. */}
                <div className={cn("absolute inset-0 pointer-events-none")}> 
                  {renderExtinguisherMarkers(groundFloorExtinguishers, groundContainerRef)}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="first" className="mt-4">
            <div
              ref={firstContainerRef}
              className={cn(
                "relative w-full rounded-lg overflow-hidden",
                background === "panel" ? "bg-gray-50 border-2 border-gray-200" : "bg-transparent border-0"
              )}
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                const x = ((e.clientX - r.left) / r.width) * 100
                const y = ((e.clientY - r.top) / r.height) * 100
                ;(e.currentTarget as HTMLDivElement).style.setProperty("--cursor-x", `${x}%`)
                ;(e.currentTarget as HTMLDivElement).style.setProperty("--cursor-y", `${y}%`)
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                {/* Magic UI–style animated grid background */}
                <AnimatedGridPattern className="absolute inset-0 text-slate-400 dark:text-slate-700 pointer-events-none" strokeColor="currentColor" cellSize={28} opacity={0.18} />

                {/* Subtle dark overlay to improve contrast */}
                <div className="absolute inset-0 bg-black/6 dark:bg-black/25 pointer-events-none" />

                {/* Floor plan */}
                <div className="absolute inset-0">
                  <FloorPlanFirst />
                </div>

                {/* Premium spotlight that follows cursor */}
                <SpotlightCursor className="absolute inset-0" color={"0, 130, 255"} radius={560} intensity={0.14} />

                {/* Extinguisher markers overlay. Keep container non-interactive so SVG beneath receives events; buttons themselves are interactive. */}
                <div className={cn("absolute inset-0 pointer-events-none")}> 
                  {renderExtinguisherMarkers(firstFloorExtinguishers, firstContainerRef)}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">{extinguishers.filter((e) => e.status === "active").length}</div>
            <div className="text-sm text-muted-foreground">کپسول فعال</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">{extinguishers.filter((e) => e.status === "expired" || e.status === "warning").length}</div>
            <div className="text-sm text-muted-foreground">نیاز به توجه</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
