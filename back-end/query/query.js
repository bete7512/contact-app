const HASURA_SIGNUP_OPERATION = `
mutation Signup($name:String!,$username:String!,$email:String!,$password:String!){
  insert_user_one(object: {name:$name,username:$username, email: $email, password:$password}) {
    id
  }
}
`;

module.exports = HASURA_SIGNUP_OPERATION;
