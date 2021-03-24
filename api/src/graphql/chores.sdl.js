export const schema = gql`
  type Chore {
    id: Int!
    name: String!
    description: String!
    estimate: Int!
    repeatable: Boolean!
    location: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    chores: [Chore!]!
  }

  input CreateChoreInput {
    name: String!
    description: String!
    estimate: Int!
    repeatable: Boolean!
    location: String!
  }

  input UpdateChoreInput {
    name: String
    description: String
    estimate: Int
    repeatable: Boolean
    location: String
  }
`
