const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const database = require('./app/config/dbconfig');
const router = require('./app/routes/LuxRoutes');

database.init(); 

const port = process.argv[2] || 3000;

app.listen(port, function(){
    console.log(`Listening on port...${port}`)
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/luxurylodging', router);