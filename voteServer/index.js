require('dotenv').config();
var express=require('express');
var app = express();
var handle = require('./handler/');
var cors = require('cors');
var bodyParser = require('body-parser');
var PORT = process.env.PORT;
var db = require('./model');
var routes = require('./routers');

app.use(cors());
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.json({hello : 'world'});
});
app.use('/api/auth',routes.auth);

app.use(handle.foundHandler);
app.use(handle.errorHandler);

app.listen(PORT,function(){
    console.log('server created and running on port ' + PORT);
});