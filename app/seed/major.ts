import { Major, PrismaClient } from '@prisma/client'

export const createMajor = async (prisma: PrismaClient): Promise<Major[]> => {
  const major = Array(10)
    .fill('')
    .map((_, index) => ({ name: `major_${index}` }))

  await prisma.major.createMany({ data: major })
  return prisma.major.findMany()
}
