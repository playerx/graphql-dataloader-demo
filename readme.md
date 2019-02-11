# GraphQL DataLoader demo
[![platform: jokio](https://img.shields.io/badge/platform-%F0%9F%83%8F%20jok-44cc11.svg)](https://github.com/jokio/jok-cli)


## Example Query
```gql
{
  user(id: "1") {
    id
    name
    relatedUsers {
      id
      name
      accounts {
        id
        description
      }
    }
    friends {
      id
      name
      accounts {
        id
        description
      }
    }
    accounts {
      id
      description
    }
  }
}
```

## Database
```ts
const users: User[] = [
  { id: '1', name: '...', accountIds: ['1', '2', '3'], relatedUserIds: ['2'], friendUserIds: ['3'] },
  { id: '2', name: '...', accountIds: ['4'], relatedUserIds: ['3'], friendUserIds: [] },
  { id: '3', name: '...', accountIds: ['5'], relatedUserIds: [], friendUserIds: [] },
]
```

## Batching Result

```js
BatchLoad->users [ '1' ] 		// (level 0)
BatchLoad->users [ '2', '3' ] 		// (level 1)
BatchLoad->accounts [ '1', '2', '3' ]  	// (level 0)
BatchLoad->accounts [ '4', '5' ]  	// (level 1)
```
