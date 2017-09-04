const thinky = require("../thinky");
const type = thinky.type;

const Cinema = thinky.createModel("Cinema", {
    id: type.string().optional(),
    address: type.string().max(256),
    name: type.string().max(64)
});

module.exports = Cinema;

const Theater = require("./theater");
const Show = require("./show");

Cinema.hasMany(Show, "shows", "id", "cinemaId");
Cinema.hasMany(Theater, "theaters", "id", "cinemaId");

