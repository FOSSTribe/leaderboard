import { GraphQLClient } from 'graphql-request'

async function main() {

  console.log("here")

  const endpoint = 'https://api.github.com/graphql'

  const ACESSS_TOKEN = process.evn.ACESSS_TOKEN || '';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })

  const query = /* GraphQL */ `
  {
    search (query: "torvalds", type: USER, first: 1){
      edges {
        node {
          ... on User {
            login,
            name
          }
        }
      }
    }
  }
  `

  console.log("err")

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))
}

main().catch(error => console.error(error))