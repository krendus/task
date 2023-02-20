import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

export const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});
