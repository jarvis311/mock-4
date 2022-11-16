const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();

const userDataRoutes = require('./routes/userDataRoute')
const userAuthRoutes = require('./routes/userAuthRoutes')
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// All Routers 
app.use('/user', userDataRoutes)
app.use('/user-auth', userAuthRoutes)



mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log('Mongodb is connected!!');
    app.listen(PORT, () => {console.log(`server running on ${PORT}`);})
}).catch(err => console.log(err))

