import { Major } from '@prisma/client'

/**
 * 무작위로 전공과목을 찾는다
 * @returns major
 */
export const randomMajor = (majors: Major[]) => {
  const pick = Math.floor(Math.random() * majors.length)

  return majors[pick]
}
