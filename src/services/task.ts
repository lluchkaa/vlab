export const getMark = (
  solution: TaskSolution,
  etalon: TaskSolution
): number => {
  const correct = etalon.reduce(
    (acc, etalonLink) =>
      solution.find(
        (solutionLink) =>
          solutionLink.from === etalonLink.from &&
          solutionLink.to === etalonLink.to
      )
        ? acc + 1
        : acc,
    0
  )

  const mark = Number(
    (
      (correct / Math.max(solution.length, etalon.length)) *
      etalon.length
    ).toFixed(1)
  )

  return mark
}
