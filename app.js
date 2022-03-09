const express = require("express")
const app = express()
const port = 3030
const path = require("path")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","index.html"))                           
})
app.get("/about",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","about.html"))                           
})
app.get("/music",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","music.html"))                           
})
app.get("/contact",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","contact.html"))                           
})
app.get("/*",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","notFound.html"))                           
})

app.listen(port,()=> console.log(`http://localhost:${port}`))