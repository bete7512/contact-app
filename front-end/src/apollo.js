import { ApolloClient,createHttpLink,InMemoryCache } from "@apollo/client/core";
const getHeaders = () => {
    const headers = {};
    const token = window.localStorage.getItem("Apollotoken");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } 
    return headers;
  };
const httpLink = createHttpLink({
    uri:'http://localhost:8080/v1/graphql',
    headers:getHeaders()
})
// const cache = new InMemoryCache()
const apolloclient = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache()
})
export default apolloclient