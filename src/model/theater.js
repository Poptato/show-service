const thinky = require("../thinky");
const type = thinky.type;

const Theater = thinky.createModel("Theater", {
    id: type.string().optional(),
    name: type.string(),
    seats: type.number().integer(),
    cinemaId: type.string()
});

module.exports = Theater;

const Cinema = require("./cinema");
const Show = require("./show");

Theater.hasOne(Cinema, "cinema", "cinemaId", "id");
Theater.hasMany(Show, "shows", "id", "theaterId");