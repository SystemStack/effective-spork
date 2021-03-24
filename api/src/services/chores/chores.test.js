import { chores } from './chores'

describe('chores', () => {
  scenario('returns all chores', async (scenario) => {
    const result = await chores()

    expect(result.length).toEqual(Object.keys(scenario.chore).length)
  })
})
