// Prisma seed script to create initial users and extinguishers (CommonJS)
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding database: users and extinguishers...")

  const adminEmail = "admin@example.com"
  const userEmail = "user@example.com"

  const adminPassword = await bcrypt.hash("admin123", 10)
  const userPassword = await bcrypt.hash("user123", 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: adminPassword,
      name: "Admin",
      role: "ADMIN",
    },
  })

  const user = await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      email: userEmail,
      passwordHash: userPassword,
      name: "User",
      role: "USER",
    },
  })

  console.log("Upserted users:", { admin: admin.email, user: user.email })

  const extinguishersData = [
    {
      location: "ورودی اصلی",
      floor: "ground",
      x: 12,
      y: 20,
      chargeDate: "2024-05-10",
      expirationDate: "2025-05-10",
      notes: "بررسی شد",
    },
    {
      location: "اتاق سرور",
      floor: "ground",
      x: 45,
      y: 30,
      chargeDate: "2024-06-01",
      expirationDate: "2025-06-01",
      notes: "CO2",
    },
    {
      location: "سالن تولید",
      floor: "first",
      x: 70,
      y: 55,
      chargeDate: "2024-04-15",
      expirationDate: "2025-04-15",
      notes: "پودر خشک",
    },
    {
      location: "راهروی A1",
      floor: "ground",
      x: 25,
      y: 40,
      chargeDate: "2024-03-20",
      expirationDate: "2025-03-20",
    },
    {
      location: "راهروی B2",
      floor: "first",
      x: 35,
      y: 25,
      chargeDate: "2024-08-01",
      expirationDate: "2025-08-01",
    },
    {
      location: "لابراتوار",
      floor: "first",
      x: 60,
      y: 35,
      chargeDate: "2024-01-12",
      expirationDate: "2025-01-12",
      notes: "نیاز به بررسی دوره‌ای",
    },
    {
      location: "خروج اضطراری",
      floor: "ground",
      x: 80,
      y: 10,
      chargeDate: "2024-10-05",
      expirationDate: "2025-10-05",
    },
  ]

  // Clear existing extinguishers for a clean seed and insert
  await prisma.extinguisher.deleteMany({})

  for (const e of extinguishersData) {
    await prisma.extinguisher.create({
      data: {
        location: e.location,
        floor: e.floor,
        x: e.x,
        y: e.y,
        chargeDate: new Date(e.chargeDate),
        expirationDate: new Date(e.expirationDate),
        notes: e.notes ?? null,
      },
    })
  }

  console.log(`Inserted ${extinguishersData.length} extinguishers`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })