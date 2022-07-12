const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static('build'));
app.use('/wp', express.static(path.join(__dirname, 'build')));

app.listen(3000, function(){
    console.log('listening on 3000');
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});