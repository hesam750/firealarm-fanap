import type { Extinguisher } from "@/types/extinguisher"

// Initial extinguisher locations based on floor plans
export const initialExtinguishers: Omit<Extinguisher, "id" | "status">[] = [
  // Ground Floor
  { location: "انبار 1", floor: "ground", x: 5, y: 22, chargeDate: "2024-01-15", expirationDate: "2025-01-15" },
  { location: "انبار 2", floor: "ground", x: 15, y: 45, chargeDate: "2024-01-15", expirationDate: "2025-01-15" },
  { location: "انبار 3", floor: "ground", x: 15, y: 65, chargeDate: "2024-02-01", expirationDate: "2025-02-01" },
  { location: "انبار 4", floor: "ground", x: 15, y: 85, chargeDate: "2024-02-01", expirationDate: "2025-02-01" },
  { location: "سالن اصلی - چپ", floor: "ground", x: 6, y: 29, chargeDate: "2024-03-10", expirationDate: "2025-03-10" },
  {
    location: "سالن اصلی - راست",
    floor: "ground",
    x: 59,
    y: 21,
    chargeDate: "2024-03-10",
    expirationDate: "2025-03-10",
  },
  {
    location: "سالن اصلی - مرکز",
    floor: "ground",
    x: 45,
    y: 55,
    chargeDate: "2024-03-15",
    expirationDate: "2025-03-15",
  },
  { location: "راهرو مرکزی", floor: "ground", x: 50, y: 70, chargeDate: "2024-04-01", expirationDate: "2025-04-01" },
  { location: "نزدیک پله", floor: "ground", x: 60, y: 85, chargeDate: "2024-04-05", expirationDate: "2025-04-05" },
  { location: "ورودی اصلی", floor: "ground", x: 70, y: 95, chargeDate: "2024-04-10", expirationDate: "2025-04-10" },
  {
    location: "سمت راست ساختمان",
    floor: "ground",
    x: 85,
    y: 30,
    chargeDate: "2024-05-01",
    expirationDate: "2025-05-01",
  },
  {
    location: "سمت راست ساختمان 2",
    floor: "ground",
    x: 85,
    y: 50,
    chargeDate: "2024-05-01",
    expirationDate: "2025-05-01",
  },

  // First Floor
  { location: "اتاق 1", floor: "first", x: 20, y: 35, chargeDate: "2024-02-20", expirationDate: "2025-02-20" },
  { location: "راهرو بالا", floor: "first", x: 35, y: 35, chargeDate: "2024-03-01", expirationDate: "2025-03-01" },
  { location: "اتاق مرکزی", floor: "first", x: 50, y: 25, chargeDate: "2024-03-05", expirationDate: "2025-03-05" },
  { location: "سمت راست", floor: "first", x: 70, y: 25, chargeDate: "2024-03-10", expirationDate: "2025-03-10" },
  { location: "اتاق پایین", floor: "first", x: 30, y: 60, chargeDate: "2024-04-15", expirationDate: "2025-04-15" },
  { location: "اتاق پایین 2", floor: "first", x: 45, y: 60, chargeDate: "2024-04-20", expirationDate: "2025-04-20" },
  {
    location: "نزدیک پله طبقه اول",
    floor: "first",
    x: 60,
    y: 75,
    chargeDate: "2024-05-01",
    expirationDate: "2025-05-01",
  },
  {
    location: "اتاق سمت راست پایین",
    floor: "first",
    x: 75,
    y: 85,
    chargeDate: "2024-05-10",
    expirationDate: "2025-05-10",
  },
]
