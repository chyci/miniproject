import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://mini-project-chy.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' :
        'Hs1v7RlKbcXp6Tqn3hPUKmPwUGhSfJzao4EW21b66DLdEkIyfI4CocR7WTgfT3OW',
    },
  });

export default client