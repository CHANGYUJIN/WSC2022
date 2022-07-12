var express = require('express');
var cors = require('cors');
const axios = require('axios');

var app = express();

app.use(cors());

const API_KEY = "RGAPI-2942e1c7-c316-4452-af15-bc1e8c643e4a";

app.listen(3000, function() {
    console.log("Server started on port 3000");
}) //localhost:3000