const bycript = require('bcryptjs')
const   HASURA_SIGNUP_OPERATION  = require("../query/query");
const execute = async (variables) => {
    const fetchResponse = await fetch(
      "http://localhost:8080/v1/graphql",
      {
        method: 'POST',
        headers:{
          'x-hasura-admin-secret': 'myadminsecretkey'
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
const handler= async (req, res) => {

    const {  username, email, password, confirmpassword } = req.body.input.objects;
    const finduser = require('../checker/findusername')
    const { data, error } = await finduser({ username })
    const user = data["user"][0]
    if (user) {
      return res.status(400).json({
        message: 'you are  registered no registratrion again'
      })
    }
    else{
      if (password != confirmpassword){
        return res.status(400).json({
            message:"passwords arenot the same"
        })
    }
    const hashed = await bycript.hash(password,10)
    const { data, errors } = await execute({  username, email, password: hashed });
      return res.json({
        success: "you registered successfully"
      })
    }
    
  
  };
  module.exports = handler;