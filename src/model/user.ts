import DataLoader from 'dataloader'

export interface User {
	id: string
	name: string
	accountIds: string[]
	relatedUserIds: string[]
	friendUserIds: string[]
}

export class UserModel extends DataLoader<string, User> {
	constructor(private db: any) {
		super(batchLoaderFn(db))
	}

	// queries
	findByName(name) {
		return users.find(x => x.name.indexOf(name) > -1)
	}

	// mutations
	create(id, name) {
		console.log(this.db)
		users.push({
			id,
			name,
			accountIds: [],
			relatedUserIds: [],
			friendUserIds: [],
		})
	}

	updateName(id, name) {
		const user = users.find(x => x.id === id)
		if (!user) { return Promise.resolve(this) }

		user.name = name

		/*
		 Its not necessary to clear because
		 new dataloaders are created per request
		*/

		// this.clear(id)

		return Promise.resolve(this)
	}
}

const batchLoaderFn = (_db) => (keys) => {
	console.log('BatchLoad->users', keys)

	const filteredUsers = users.filter(x => keys.indexOf(x.id) > -1)

	return Promise.resolve(
		keys.map(id => filteredUsers.find(x => x.id === id) || null),
	)
}

const users: User[] = [
	{
		id: '1',
		name: 'Ezeki',
		accountIds: ['1', '2', '3'],
		relatedUserIds: ['2'],
		friendUserIds: ['3'],
	},
	{ id: '2', name: 'Babt', accountIds: ['4'], relatedUserIds: [], friendUserIds: [] },
	{ id: '3', name: 'PlayerX', accountIds: ['5'], relatedUserIds: [], friendUserIds: [] },
]
