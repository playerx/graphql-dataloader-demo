import { Account, Db, User } from '../model'

interface Context { db: Db }

// const delay = (x) => new Promise(resolve => setTimeout(() => resolve(), x))

export default {
	Query: {
		user: (_, { id }, { db }: Context) =>
			db.user.load(id),
	},

	User: {
		accounts: ({ accountIds }: User, _, { db }: Context) =>
			db.account.loadMany(accountIds),

		relatedUsers: ({ relatedUserIds }: User, _, { db }: Context) =>
			db.user.loadMany(relatedUserIds),

		friends: ({ friendUserIds }: User, _, { db }: Context) =>
			db.user.loadMany(friendUserIds),
	},

	Account: {
		user: ({ userId }: Account, _, { db }: Context) =>
			db.user.load(userId),
	},

	Mutation: {
		updateUserName: (_, { id, name }, { db }: Context) =>
			db.user.updateName(id, name)
				.then(x => x.load(id)),
	},
}
