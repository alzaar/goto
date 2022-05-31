import 'dotenv/config'
import express from 'express'
// import mongoose from 'mongoose'
import gameRouter from './routers/gameRouter'

const app = express()
// mongoose.connect('mongodb://localhost/my_database')

app.use('/games', gameRouter)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
