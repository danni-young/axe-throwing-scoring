import { formatAndAddScores } from '~/lib/formatAndAddScores'

describe('formatAndAddScores', () => {
  it('should return formatted scores', () => {
    expect(
      formatAndAddScores(
        [
          { 1: 1, 2: 2, 3: 2 },
          { 1: 1, 2: 5, 3: 2 },
        ],
        ['Danni', 'Matthew']
      )
    ).toStrictEqual({ Danni: 5, Matthew: 8 })
  })
})
