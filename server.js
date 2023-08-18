const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
// const userRoute = require('./routes/userRoute');
const errorMiddleware = require('./middleware/errorMiddleware');

// for cors policy verification 
const cors = require('cors');

require('dotenv').config()   // for env

const app = express()

// getting variables from env file
const port = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const FRONT_END = process.env.FRONT_END

// to allow only specific users to access apis
var coreOptions = {
  origin: FRONT_END,
  optionsSuccessStatus:200
}
app.use(cors(coreOptions))
 
// middelware for json
app.use(express.json())

// middleware for forms
app.use(express.urlencoded({extended:false}))

// middleware to use routes
app.use('/products',productRoute)
// app.use('/users',userRoute)

app.get('/', (req, res) => {
  // throw new Error('fake error')    // gives fake error for testing
  res.send('Hello World!')
})

app.get('/blog', (req, res) => {
  res.send('Hello World! this is a blog')
})

app.use(errorMiddleware)

// mongoose.set("strictQuery",false)
// mongoose.connect('mongodb://127.0.0.1:27017')
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(port, () => {
        console.log(`app started on port ${port}`)
      })

    console.log('Connected! to mongodb')})
  .catch(()=> {console.log(error);});



