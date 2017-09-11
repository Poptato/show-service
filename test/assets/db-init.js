const thinky = require("../../src/thinky");
const Cinema = require("../../src/model/cinema");
const Theater = require("../../src/model/theater");
const Show = require("../../src/model/show");

class DbInitializer {
    async init() {
        try {
            // Drop existing tables.
            await Promise.all([
                thinky.r.db("test").table("Cinema").delete().run(),
                thinky.r.db("test").table("Theater").delete().run(),
                thinky.r.db("test").table("Show").delete().run()
            ]);
        } finally {
            // Re-create & populate tables.
            this.customers = await this.createCinemas();
            this.theaters = await this.createTheaters();
            this.shows = await this.createShows();
        }

        console.info("Populated database...");
    }

    async createCinemas() {
        let mockCinemas = require("./mock-cinemas.json");
        return await Promise.all(mockCinemas.map(c => Cinema(c).save()));
    }

    async createTheaters() {
        let mockTheaters = require("./mock-theaters.json");
        return await Promise.all(mockTheaters.map(t => Theater(t).save()));
    }

    async createShows() {
        let mockShows = require("./mock-shows.json");
        return await Promise.all(mockShows.map(s => Show(s).save()));
    }
}

module.exports.go = async function() {
    const initializer = new DbInitializer();
    await initializer.init();
    process.exit();
};

module.exports.default = DbInitializer;
