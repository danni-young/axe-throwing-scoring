export const createPlayerRounds = (players: string[]): string[][] => {
    //get list of players, create all possible outcomes
    const result = players.reduce((acc: string[][], value: string, index: number) =>
        acc.concat(players.slice(index + 1).map(playerCombo => [value, playerCombo])),
        []);
    return result
}