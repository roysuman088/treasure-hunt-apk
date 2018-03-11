const express = require('express');
var path=require('path');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get("/DownloadText", (req, res) => {
    var file = __dirname+'/download/Treasure-hunt.txt';
    res.download(file);
});

app.get("/DownloadApp", (req, res) => {
    var file = __dirname+'/download/Treasure-hunt.apk';
    res.download(file);
});

app.listen(3000, (req, res)=> {
    console.log("Listening on port 3000");
});