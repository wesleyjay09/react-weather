const express = require('express');
const app = express();
const cors = require("cors")
const PORT = 8080;
const path = require('path')



//middlewares
app.use(cors())
app.use(express.json())


app.use(express.static(path.join( `${__dirname}/public`)));



app.listen(PORT, () => {
    console.log(`on ${PORT}`)
})