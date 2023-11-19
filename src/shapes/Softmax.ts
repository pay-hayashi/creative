export const softmax = (arr: number[]) => {
  const exps = arr.map(Math.exp)
  const sum = exps.reduce((sum, exp) => sum + exp)
  return exps.map(exp => exp / sum)
}
