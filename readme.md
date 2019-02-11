# GraphQL DataLoader demo
[![platform: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jok-44cc11.svg)](https://github.com/jokio/jok-cli)


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
    friends{
      id
      name
      accounts{
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

result:

```
BatchLoad->users [ '1' ]
BatchLoad->users [ '2', '3' ]
BatchLoad->accounts [ '1', '2', '3' ]
BatchLoad->accounts [ '4', '5' ]
```
