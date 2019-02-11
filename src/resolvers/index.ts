import { Account, Db, User } from '../model'

interface Context { db: Db }

const delay = (x) => new Promise(resolve => setTimeout(() => resolve(), x))

export default {
	Query: {
		user: (_, { id }, { db }: Context) =>
			db.user.load(id),
	},

	User: {
		accounts: ({ accountIds }: User, _, { db }: Context) =>
			db.account.loadMany(accountIds),
	},

	Account: {
		user: async ({ userId }: Account, _, { db }: Context) => {
			await delay(3000)

			return await db.user.load(userId)
		},
	},

	Mutation: {
		updateUserName: (_, { id, name }, { db }: Context) =>
			db.user.updateName(id, name)
				.then(x => x.load(id)),
	},
}
