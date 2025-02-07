const express= require('express')
const {urlencoded} = require('express')
const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))

app.get("/",(req,res)=>{

   return res.json("hello")
})


app.listen(9090,()=>{
console.log("running")
})