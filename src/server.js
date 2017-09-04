const Express = require("express");
const bodyParser = require("body-parser");

const InfoController = require("./controller/info-ctrl");
const CinemaController = require("./controller/cinema-ctrl");
const TheaterController = require("./controller/theater-ctrl");
const ShowController = require("./controller/show-ctrl");

let app = new Express();
let port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use("/info", InfoController);
app.use("/cinemas", CinemaController);
app.use("/theaters", TheaterController);
app.use("/shows", ShowController);

app.listen(port, () => {
   console.log(`Movie service is running on port ${port}`);
});

module.exports = app;