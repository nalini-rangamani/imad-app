var express = require('express');
var morgan = require('morgan');
var path = require('path')
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config={
    user : 'nalinirangamani',
    database : 'nalinirangamani',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

function hash(input,salt)
{
   var hashed =  crypto.shpbkdf2Sync(input,salt,10000,512,'sha512');
   return hashed.toString('hex');
}

app.get('/hash/:input', function (req, res) {
    var result = hash(req.params.input,'random str');
    
  res.send(result);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get*'/test-db',function(req,res){
    pool.query('SELECT * from test',function(err,result){
    if (err) {
    send.status(500).send(err.toString());
    }
    else
    {
        res.send(JSON.stringify(result));
    }
    }
    )
};
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter=0;
app.get('/counter', function (req, res) {
  counter= counter + 1; 
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){
    var name1 = req.query.name;
    names.push(name1);
    res.send(JSON.stringify(names));
});

app.get('/article1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two2.html'));
});

app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','main.js'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
