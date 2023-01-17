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
        { name: 'Matthew', score: 2,  "class": "mb-2 bg-yellow-600 font-semibold" },
        { name: 'Danni', score: 1,  "class": "mb-2 font-semibold"},
      ],
      draw: false,
    })
  })
  it('should highlight a draw', () => {
    expect(
      calculateHighestScore({
        Danni: { total: 1, rounds: [1]},
        Matthew: { total: 1, rounds: [1]},
      })
    ).toStrictEqual({
      results: [
        { name: 'Danni', score: 1,   "class": "mb-2 bg-yellow-600 font-semibold" },
        { name: 'Matthew', score: 1 ,  "class": "mb-2 font-semibold"},
      ],
      draw: true,
    })
  })
  it('should return empty objects to deal with page clicked on with no scores', () => {
    expect(
      calculateHighestScore({
       
      })
    ).toStrictEqual({
      results: [
  
      ],
      draw: false,
    })
  })
})
