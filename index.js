require('dotenv').config()

const express = require('express') 

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (res, req)=>{
  res.send('priyanshudotcom')
})

app.get('/login', (res, req)=>{
    res.send('<h1>please login at priyanshu</h1>')
})

app.get('/youtube', (res, req)=>{
    res.send('<h2>sab thik hai</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
