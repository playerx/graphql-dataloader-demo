import { gql } from 'apollo-server-express'

export default gql`

type Query {
	user(id: ID!): User!
}

type Mutation {
	updateUserName(id: ID!, name: String!): User!
}

type User {
	id: ID!
	name: String!
	accounts: [Account!]!
}

type Account {
	id: ID!
	description: String!
	user: User!
}

`
