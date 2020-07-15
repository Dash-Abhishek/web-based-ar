const express = require('express')

const app= express()

app.use(express.static('./'))

const port = process.env.PORT || 3000

app.get("/ar", (req,res)=>{

    console.log("got request from",req.host);

    res.sendFile(__dirname+'/index.html');

})


app.listen(port,()=>{
    console.log("app listening on 3000");
})