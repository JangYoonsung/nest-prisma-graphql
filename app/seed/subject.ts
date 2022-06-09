import { Major, PrismaClient, Subject, SubjectType } from '@prisma/client'

type TSubject = {
  credit: number
  code: string
  name: string
  type: SubjectType
  majorId: number
}
export const createSubjects = async (
  prisma: PrismaClient,
  majors: Major[]
): Promise<Subject[]> => {
  const subjects: TSubject[] = []
  const randomMajor = () => {
    const pick = Math.floor(Math.random() * majors.length)
    return majors[pick]
  }

  // must
  Array(5)
    .fill('')
    .map((_, index) => {
      const must: TSubject = {
        credit: 3,
        code: `must_subject_${index}`,
        name: `must_subject_${index}`,
        type: 'MUST',
        majorId: randomMajor().id
      }
      subjects.push(must)
    })

  // optional
  Array(3)
    .fill('')
    .map((_, index) => {
      const optional: TSubject = {
        credit: 2,
        code: `optional_subject_${index}`,
        name: `optional_subject_${index}`,
        type: 'OPTIONAL',
        majorId: randomMajor().id
      }
      subjects.push(optional)
    })

  // elective
  Array(2)
    .fill('')
    .map((_, index) => {
      const elective: TSubject = {
        credit: 2,
        code: `elective_subject_${index}`,
        name: `elective_subject_${index}`,
        type: 'ELECTIVE',
        majorId: randomMajor().id
      }
      subjects.push(elective)
    })

  await Promise.all(
    subjects.map(async (value) => {
      await prisma.subject.create({ data: value })
    })
  )

  return prisma.subject.findMany()
}
