import { Class, Days, PrismaClient, Subject } from '@prisma/client'
import { randomModel } from './util'

export const createClass = async (
  prisma: PrismaClient,
  subjects: Subject[]
): Promise<Class[]> => {
  const days: Days[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']
  const randomDays = randomModel(days)
  const classes = Array(10)
    .fill('')
    .map(() => ({
      time: new Date(2022, 1, 1, 10, 0, 0),
      days: randomDays,
      subjectId: randomModel(subjects).id
    }))

  await prisma.class.createMany({ data: classes })
  return prisma.class.findMany()
}
