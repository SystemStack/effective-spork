import { db } from 'src/lib/db'

export const chores = () => {
  return db.chore.findMany()
}
