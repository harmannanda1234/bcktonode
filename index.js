const express= require('express')
const {urlencoded} = require('express')
const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))

app.get("/",(req,res)=>{
   onj = {
      "name":"harman",
      "dept":"IT"
   }
   
   return res.json({
      "name":"harman",
      "package":12000000
   })
   
})


app.listen(9090,()=>{
console.log("running")
})