import { mutations } from '../store/players'
const { addScores } = mutations

describe('mutations', () => {
  describe('addScores', () => {
    it('should return score when no score exists', () => {
      const state = {
        scores: {},
      }
      const playerScores = { Danni: 1, Matt: 2 }
      addScores(state, playerScores)
      expect(state.scores).toStrictEqual({
        Danni: { rounds: [1], total: 1 },
        Matt: { rounds: [2], total: 2 },
      })
    })
    it('should return score when scores exists', () => {
      const state = {
        scores: {
          Matt: { rounds: [1], total: 1 },
          Danni: { rounds: [2], total: 2 },
        },
      }
      const playerScores = { Bob: 1, Matt: 2 }
      addScores(state, playerScores)
      expect(state.scores).toStrictEqual({
        Danni: { rounds: [2], total: 2 },
        Matt: { rounds: [1, 2], total: 3 },
        Bob: { rounds: [1], total: 1 },
      })
    })
  })
})
