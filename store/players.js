export const state = () => ({
    playerNames: ['Danni', 'Matthew', "Sarah", "Allan"],
    playerCombinations: [['Danni', 'Matthew'],
    ["Danni", "Allan"],
    ["Danni", "Sarah"],
    ["Matthew", "Allan"],
    ["Matthew", "Sarah"],
    ["Allan", "Sarah"]],
    gameNumber: 0
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
    completedGame(state) {
        state.playerCombinations =
            state.playerCombinations += 1
    },
}


