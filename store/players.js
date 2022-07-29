export const state = () => ({
    playerNames: ['Danni', 'Matthew', "Sarah", "Allan"],
    playerCombinations: [['Danni', 'Matthew'],
    ["Danni", "Allan"],
    ["Danni", "Sarah"],
    ["Matthew", "Allan"],
    ["Matthew", "Sarah"],
    ["Allan", "Sarah"]],
    gameNumber: 0
    //scores
})
//need to keep the scores in here
export const mutations = {
    add(state, text) {
        state.playerNames =
            text
    },
    addCombination(state, text) {
        state.playerCombinations =
            text
    }
}


