export const calculateHighestScore = (scores: { [index: string]: { rounds: number[], total: number } } ): {results: {name: string, score: number}[], draw: boolean}=> {
    const playerNames: string[] = Object.keys(scores)

    const results =  playerNames.map((name: string) => {
        return {
            name,
            score: scores[name].total
        }
    }).sort((a, b) => b.score - a.score)

    const draw = results[0].score === results[1].score
    return {results, draw}
}