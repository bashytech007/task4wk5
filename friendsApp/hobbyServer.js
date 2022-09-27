const express = require('express')
const router = require('./src/router/hobbyRoute')
const sayHi = require('./src/middlewares/hobbyMiddleware')

const app = express()
app.use(express.json())

app.use('/hobby',sayHi, router)

app.listen(9090, ()=>{
    console.log('hobby app is cooking')
})