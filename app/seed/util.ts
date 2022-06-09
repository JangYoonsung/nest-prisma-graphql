/**
 * 랜덤한 값을 찾는다
 * @returns random target
 */
export const randomModel = <T>(target: T[]) => {
  const pick = Math.floor(Math.random() * target.length)

  return target[pick]
}
