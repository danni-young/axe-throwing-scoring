export const createPlayerRounds = (players: string[]): string[][] => {
  return players.reduce(
    (acc: string[][], value: string, index: number) =>
      acc.concat(
        players.slice(index + 1).map((playerCombo) => [value, playerCombo])
      ),
    []
  )
}
