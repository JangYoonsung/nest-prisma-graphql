import { Major, PrismaClient } from "@prisma/client";

export const createMajor = async (prisma: PrismaClient): Promise<Major[]> => {
  const major = Array(10).fill('').map((_, index) => ({ name: `major_${index}` }))
  await Promise.all(
    major.map(async (value) => {
      await prisma.major.create({ data: value })
    })
  )

  return prisma.major.findMany()
}