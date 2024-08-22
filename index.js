const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();
const path = require('path')

const app = express();
const PORT = 8006 || 8080;

app.use(express.json());
app.use(cors());
app.use(router);

app.use(express.static(path.join(__dirname,'./clientside/build')));

app.get('*',function(req,resp){
    resp.sendFile(path.join(__dirname, './clientside/build/index.html'), function(error){
        resp.status(500).send(error);
    })
});

app.listen(PORT, () => {
    console.log(`Server started at port no: ${PORT}`);
});
