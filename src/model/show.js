const thinky = require("../thinky");
const type = thinky.type;

const Show = thinky.createModel("Show", {
    id: type.string().optional(),
    time: type.date(),
    availableSeats: type.number().integer(),
    movieId: type.string(),
    cinemaId: type.string(),
    theaterId: type.string()
});

module.exports = Show;

const Cinema = require("./cinema");
const Theater = require("./theater");

Show.hasOne(Cinema, "cinema", "cinemaId", "id");
Show.hasOne(Theater, "theater", "theaterId", "id");
