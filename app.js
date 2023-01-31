const express = require('express')
const app = express()
const port = 3000
// menggunakan ejs
app.set('view engine', 'ejs')
// route basic ejs 
app.get('/ejs', (req,res)=>{
    res.render('index')
})
// route basix expres js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send(`ini halaman about`)
})
// route dengan memangil file html
app.get('/html',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})
// route dengan satu parameter
app.get('/product/:id',(req,res)=>{
    res.send('product ID :'+req.params.id)
})
// route dengan 2 parameter 
app.get('/user/:id',(req,res)=>{
    res.send(`Product ID : ${req.params.id} <br> Category: ${req.query.category}`)
})
// route dengan json file
app.get('/json',(req,res)=>{
    res.json({
        nama : `khodir`,
        alamat :`tulungagung`,
        noHp : `081123456789`
    })
})
app.use('/',(req, res) => {
        res.status(404)
        res.send(`404`)
    })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})