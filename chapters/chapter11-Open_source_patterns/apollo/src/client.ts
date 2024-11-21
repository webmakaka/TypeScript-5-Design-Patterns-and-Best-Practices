import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core"
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
})
type Country = {
  name: string
  capital: string
  currency: string
}
client
  .query<Country>({
    query: gql`
      query {
        country(code: "IE") {
          name
          capital
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result))
