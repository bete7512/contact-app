import gql from 'graphql-tag';
const loginqueries = gql`
mutation Login($password: String!, $username: String!) {
  signin(password: $password, username: $username) {
    token
  }
}
`

const signupqueries =  gql`
mutation Register($name:String!,$email: String!, $username: String!, $password: String!) {
  register(objects: { name:$name,email:$email, username: $username, password: $password}) {
    success
  }
}
`
export {loginqueries,signupqueries} 