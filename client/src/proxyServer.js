var express = require('express');
var cors = require('cors');
const axios = require('axios');

var app = express();

app.use(cors());

const API_KEY = "RGAPI-914fd54f-3b53-45da-b4be-b8e0a2e1a2a3";

app.listen(3000, function() {
    console.log("Server started on port 3000");
}) //localhost:3000