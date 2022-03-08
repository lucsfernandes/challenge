const express = require('express');
const cors = require('cors');
const routes = require('./router/index');

const app = express();

app.use(cors()); //Utilizado para restringir quem pode acessar a nossa API. No momento está como default ALL
app.use(express.json());
app.use(routes);

console.log('App started! Listening at 127.0.0.1:3333');
app.listen(3333);