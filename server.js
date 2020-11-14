const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const tagRoutes = require('./routes/tag')
const formRoutes = require('./routes/form')

const app = express()

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
.then(() => console.log("database connected"))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

if (process.env.NODE_ENV == 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))

}

app.use('/api',blogRoutes)
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',tagRoutes)
app.use('/api',formRoutes)

const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`Server is running on ${port}`)
})