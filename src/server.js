const express = require("express");
const bodyParser = require("body-parser");
const {join} = require("path");

const InfoController = require("./controller/info-ctrl");
const CinemaController = require("./controller/cinema-ctrl");
const TheaterController = require("./controller/theater-ctrl");
const ShowController = require("./controller/show-ctrl");

let server = new express();
let port = process.env.PORT || 4000;

server.use(bodyParser.json());

server.use("/info", InfoController);
server.use("/cinemas", CinemaController);
server.use("/theaters", TheaterController);
server.use("/shows", ShowController);
server.use("/docs", express.static("/docs", join(__dirname, "../docs")))

server.listen(port, () => {
   console.log(`Shows service is running on port ${port}`);
});

module.exports = server;