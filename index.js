import express from 'express'

import productRouter from './routes/productsRouter.js'

let port = process.env.PORT  || 3001

const app = express()

app.use(express.json())

app.use(express.static('public'))
app.use('/',productRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+port)
})