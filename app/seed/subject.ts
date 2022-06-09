import { Major, PrismaClient, Subject } from '@prisma/client'

export const createSubjects = async (
  prisma: PrismaClient,
  majors: Major[]
): Promise<Subject[]> => {
  const subjects = []
  const randomMajor = () => {
    let pick = Math.floor(Math.random() * majors.length)
    return majors[pick]
  }

  Array(5)
    .fill('')
    .map((_, index) => {
      const must = {
        credit: 3,
        code: `must_subject_${index}`,
        name: `must_subject_${index}`,
        type: 'MUST',
        major: randomMajor()
      }
      subjects.push(must)
    })

  Array(3)
    .fill('')
    .map((_, index) => {
      const optional = {
        credit: 2,
        code: `optional_subject_${index}`,
        name: `optional_subject_${index}`,
        type: 'OPTIONAL',
        major: randomMajor()
      }
      subjects.push(optional)
    })

  await Promise.all(
    subjects.map(async (value) => {
      await prisma.subject.create({ data: value })
    })
  )

  return prisma.subject.findMany()
}
