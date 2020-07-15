const express = require('express')

const app= express()

app.use(express.static('./'))

app.get("/ar", (req,res)=>{

    console.log("got request from",req.host);

    res.sendFile(__dirname+'/index.html');

})


app.listen(3000,()=>{
    console.log("app listening on 3000");
})