const bycript = require('bcryptjs')
const   HASURA_SIGNUP_OPERATION  = require("../query/query");
const execute = async (variables) => {
    const fetchResponse = await fetch(
      "http://localhost:8080/v1/graphql",
      {
        method: 'POST',
        headers:{
          'x-hasura-admin-secret': 'adminsecretkey'
        },
        body: JSON.stringify({
          query: HASURA_SIGNUP_OPERATION,
          variables
        })
      }
    );
    const data = await fetchResponse.json();
    console.log('DEBUG: ', data);
    return data;
  };
const handler =  async (req, res) => {
    const { First_name, Last_name, username, email, password,confirmpassword } = req.body.input;
    if (password != confirmpassword){
        return res.status(400).json({
            message:"passwords arenot the same"
        })
    }
    const check = require('../checker/usernamecheck')
    const bool = await check(username);
    if(bool){
        console.log(bool)
        return res.status(400).json({
            message:"your email is already registered"
        })
    }
    else{
        const hashed = await bycript.hash(password,10)
        const { data, errors } = await execute({ First_name, Last_name, username, email, password: hashed });
     
        if (errors) {
          return res.status(400).json(
            {
                message:"your are already registered no need to register again"
            }
          )
        }
        return res.json({
            success:"man successfully registered",
          //...data.insert_user_one
        })
    }  
  };
  module.exports = handler;