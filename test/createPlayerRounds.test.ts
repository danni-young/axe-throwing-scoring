import { createPlayerRounds } from '../lib/createPlayerRounds'
describe('createPlayerRounds', () => {
  it('should return player combinations', () => {
    expect(createPlayerRounds(['Danni', 'Matthew', 'Rob', 'Natalie'])).toEqual([
      ['Danni', 'Matthew'],
      ['Danni', 'Rob'],
      ['Danni', 'Natalie'],
      ['Matthew', 'Rob'],
      ['Matthew', 'Natalie'],
      ['Rob', 'Natalie'],
    ])
  })
})
