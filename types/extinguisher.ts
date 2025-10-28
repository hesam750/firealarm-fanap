export interface Extinguisher {
  id: string
  location: string
  floor: "ground" | "first"
  x: number // percentage position on floor plan
  y: number // percentage position on floor plan
  chargeDate: string
  expirationDate: string
  lastInspection?: string
  status: "active" | "expired" | "warning"
  notes?: string
}

export interface Alert {
  id: string
  extinguisherId: string
  type: "expiring-soon" | "expired" | "inspection-due"
  message: string
  severity: "low" | "medium" | "high"
  createdAt: string
}
