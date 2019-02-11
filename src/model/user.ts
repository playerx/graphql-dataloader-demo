import DataLoader from 'dataloader'

export interface User {
	id: string
	name: string
	accountIds: string[]
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
		users.push({ id, name, accountIds: [] })
	}

	async updateName(id, name) {
		const user = users.find(x => x.id === id)
		if (!user) { return this }

		user.name = name

		this.clear(id)

		return this
	}
}

const batchLoaderFn: (db) => DataLoader.BatchLoadFn<string, User> = (_db) => (keys) => {
	const data = users.filter(x => keys.indexOf(x.id) > -1)

	// TODO: make sure ordering and length matches

	console.log('UserLoader', keys)

	return Promise.resolve(data)
}

const users: User[] = [
	{ id: '1', name: 'Ezeki', accountIds: ['1', '2', '3'] },
	{ id: '2', name: 'Babt', accountIds: ['4', '5'] },
]
