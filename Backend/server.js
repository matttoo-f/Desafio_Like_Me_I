require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes/post.routes.js')

const {PORT} = process.env

app.use(express.json())
app.use(cors())

app.use('/', routes)



app.listen(PORT || 3000, console.log("SERVIDOR ENCENDIDO"))



