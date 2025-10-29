"use client"

import React from "react"
import DatePicker from "react-multi-date-picker"
import type { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

interface PersianDatePickerProps {
  id?: string
  value?: string // ISO string: YYYY-MM-DD
  onChange: (isoDate: string) => void
  placeholder?: string
  required?: boolean
}

function dateFromIso(iso?: string): Date | undefined {
  if (!iso) return undefined
  // Avoid timezone shifts by constructing a local Date
  const [y, m, d] = iso.split("-").map((n) => Number(n))
  if (!y || !m || !d) return undefined
  return new Date(y, m - 1, d)
}

function toIso(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function PersianDatePicker({ id, value, onChange, placeholder, required }: PersianDatePickerProps) {
  return (
    <div id={id} className="w-full" dir="rtl">
      <DatePicker
        value={dateFromIso(value)}
        onChange={(val: unknown) => {
          if (!val) {
            onChange("")
            return
          }
          try {
            const dObj = val as DateObject
            const d = typeof dObj?.toDate === "function" ? dObj.toDate() : (val as Date)
            if (d instanceof Date && !isNaN(d.getTime())) {
              onChange(toIso(d))
            }
          } catch {
            // Fallback: ignore
          }
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        inputClass="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-right"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default PersianDatePicker