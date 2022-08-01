export const state = () => ({
    // string[]
    playerNames: ['Danni', 'Matthew', "Sarah", "Allan"],
    // string[][]
    playerCombinations: [['Danni', 'Matthew'],
    ["Danni", "Allan"],
    ["Danni", "Sarah"],
    ["Matthew", "Allan"],
    ["Matthew", "Sarah"],
    ["Allan", "Sarah"]],
    // number
    gameNumber: 0,
    // { string: { rounds: number[], total: number } }
    scores: {

    }
})

export const mutations = {
    add(state, text) {
        state.playerNames =
            text
    },
    addCombination(state, text) {
        state.playerCombinations =
            text
    },
    moveToNextGame(state) {
        state.gameNumber += 1
    },
    /**
     * 
     * @param {any} state 
     * @param {string: number } playerScores 
     */
    addScores(state, playerScores){
        const names = Object.keys(playerScores)
        names.forEach((name) => {
            if(state.scores[name]){
                state.scores[name].rounds = [...state.score[names].rounds, playerScores[name]]
                state.scores[name].total += playerScores[name]

            } else {
                state.scores[name] = {rounds: [playerScores[name]], total: playerScores[name]}
            }
        })
    }
}


