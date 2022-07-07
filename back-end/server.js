const express = require('express')
const app  = express();
app.use(express.json())
app.post('/:route', (req,res)=>{
  try{
    const handler = require(`./handler/${req.params.route}`);
    if(!handler){
      return res.status(400).json({
        message:'not found'
      })
    }
    handler(req,res);
  }
  catch(e){
    return res.status(400).json({
      message:'unexpected error occured'
    })
  }

})
app.listen(3000,
    () => {
      console.log('here is going well')
    }
  );