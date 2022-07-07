const FIND_USER = require('../query/finduser')
require('dotenv').config()
const finduser = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'myadminsecretkey'
              },
            body: JSON.stringify({
                query: FIND_USER,
                variables: variables
            })
        }
    );
    console.log('here is well')
    const data = await fetchResponse.json();
    console.log('DEBUG: ',data);
    // const sth = HASURA_GRAPGHQL_ENDPOINT
    // console.log(sth)
    return data;
};
module.exports = finduser;