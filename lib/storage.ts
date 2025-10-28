import type { Extinguisher } from "@/types/extinguisher"
import { initialExtinguishers } from "./extinguisher-data"

const STORAGE_KEY = "fire-extinguishers"

export function getExtinguishers(): Extinguisher[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  }

  // Initialize with default data
  const initialized = initialExtinguishers.map((ext, index) => ({
    ...ext,
    id: `ext-${index + 1}`,
    status: calculateStatus(ext.expirationDate),
  }))

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialized))
  return initialized
}

export function saveExtinguishers(extinguishers: Extinguisher[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(extinguishers))
}

export function calculateStatus(expirationDate: string): "active" | "expired" | "warning" {
  const today = new Date()
  const expiry = new Date(expirationDate)
  const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  if (daysUntilExpiry < 0) return "expired"
  if (daysUntilExpiry <= 30) return "warning"
  return "active"
}

export function updateExtinguisher(id: string, updates: Partial<Extinguisher>): void {
  const extinguishers = getExtinguishers()
  const index = extinguishers.findIndex((ext) => ext.id === id)

  if (index !== -1) {
    extinguishers[index] = {
      ...extinguishers[index],
      ...updates,
      status: updates.expirationDate ? calculateStatus(updates.expirationDate) : extinguishers[index].status,
    }
    saveExtinguishers(extinguishers)
  }
}

export function deleteExtinguisher(id: string): void {
  const extinguishers = getExtinguishers()
  const filtered = extinguishers.filter((ext) => ext.id !== id)
  saveExtinguishers(filtered)
}

export function addExtinguisher(extinguisher: Omit<Extinguisher, "id" | "status">): void {
  const extinguishers = getExtinguishers()
  const newExtinguisher: Extinguisher = {
    ...extinguisher,
    id: `ext-${Date.now()}`,
    status: calculateStatus(extinguisher.expirationDate),
  }
  extinguishers.push(newExtinguisher)
  saveExtinguishers(extinguishers)
}
