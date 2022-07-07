const HASURA_OPERATION = `
query test($username: String!) {
  user(where: {username: {_eq: $username}}) {
    username
  }
}
`;
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers:{
        'x-hasura-admin-secret': 'adminsecretkey'
      },
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
  
const check = async (username) => {
   
  const { data } = await execute({ username });
 console.log(data)
  if(true) {
    return true
  }
  else
  {
    return false
  }

};
module.exports = check;