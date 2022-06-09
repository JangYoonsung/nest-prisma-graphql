import { Major, PrismaClient, Student } from '@prisma/client'
import { randomMajor } from './util'

export const createStudents = async (
  prisma: PrismaClient,
  majors: Major[]
): Promise<Student[]> => {
  const students = Array(10)
    .fill('')
    .map((_, index) => ({
      name: `student_${index}`,
      grade: Math.floor(Math.random() * 4 + 1),
      studentNumber: Math.floor(Math.random() * 10 * 10),
      entrance: new Date(2022, 4),
      majorId: randomMajor(majors).id
    }))

  await prisma.student.createMany({ data: students })
  return prisma.student.findMany()
}
