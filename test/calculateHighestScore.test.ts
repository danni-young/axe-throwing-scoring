import { calculateHighestScore } from '~/lib/calculateHighestScore'

describe('calculateHighestScore', () => {
  it('should return highest scorer', () => {
    expect(
      calculateHighestScore({
        Danni: { total: 1, rounds: [1] },
        Matthew: { total: 2, rounds: [2] },
      })
    ).toStrictEqual({
      results: [
        { name: 'Matthew', score: 2 },
        { name: 'Danni', score: 1 },
      ],
      draw: false,
    })
  })
  it('should highlight a draw', () => {
    expect(
      calculateHighestScore({
        Danni: { total: 1, rounds: [1] },
        Matthew: { total: 1, rounds: [1] },
      })
    ).toStrictEqual({
      results: [
        { name: 'Danni', score: 1 },
        { name: 'Matthew', score: 1 },
      ],
      draw: true,
    })
  })
})
