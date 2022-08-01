interface PlayerScores {
    [index: string | number]: number
}

const rounds = [1, 2, 3]

export const formatAndAddScores = (playerScores: PlayerScores[], names: string[] ): {[index: string] : number}=> {
    const finalScores: {[index: string] : number} = {}
    playerScores.forEach((player: PlayerScores, index: number) => {
        rounds.forEach((round: number) => {
            if(finalScores[names[index]]){
                finalScores[names[index]] += player[round]
            } else {
                finalScores[names[index]] = player[round]
            }
        })
    })

    return finalScores
}