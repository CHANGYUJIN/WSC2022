const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static('build'));
app.use('/wp', express.static(path.join(__dirname, 'build')));

app.listen(PORT, function(){
    console.log('Server is running');
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});