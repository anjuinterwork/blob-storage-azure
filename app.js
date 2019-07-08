var express=require('express')
var app=express();
const port=4040;
var path = require('path');

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/upload.html'));
})


app.post('/upload',(req,res)=>{
console.log(req.body)
    
})





app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})


