const express = require('express');

const app = express();
const taskRouter = require('./Routes/taskRoutes')
const dotenv = require('dotenv').config();
const userRoute = require('./Routes/userRoutes')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log(`connected to mongodb ${process.env.MONGO_URI}`) })
    .catch(() => { console.log('failed to connect to database') })


const port = process.env.PORT || 5000
app.use(express.json())//


app.use('/api/tasks', taskRouter);
app.use('/api/user', userRoute)
app.listen(port, () => {
    console.log(`Server is started at port ${port}`)
})