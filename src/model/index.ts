import { AccountModel } from './account'
import { UserModel } from './user'

export { User } from './user'
export { Account } from './account'

export interface Db {
	user: UserModel
	account: AccountModel
}

export const createDb = (db): Db => ({
	user: new UserModel(db),
	account: new AccountModel(db),
})
