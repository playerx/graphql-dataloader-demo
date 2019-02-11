import DataLoader from 'dataloader'

export interface Account {
	id: string
	description: string
	userId: string
}

export class AccountModel extends DataLoader<string, Account> {
	constructor(db: any) {
		super(batchLoaderFn(db))
	}

	// queries

	// mutations
}

const batchLoaderFn: (db) => DataLoader.BatchLoadFn<string, Account> = (_db) => (keys) => {
	const data = accounts.filter(x => keys.indexOf(x.id) > -1)

	// TODO: make sure ordering and length matches

	console.log('UserLoader', keys)

	return Promise.resolve(data)
}

const accounts: Account[] = [
	{ id: '1', description: 'Account 1', userId: '1' },
	{ id: '2', description: 'Account 2', userId: '1' },
	{ id: '3', description: 'Account 3', userId: '1' },
	{ id: '4', description: 'Account 4', userId: '2' },
	{ id: '5', description: 'Account 5', userId: '2' },
]
