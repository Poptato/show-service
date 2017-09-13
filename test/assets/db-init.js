const thinky = require("../../src/thinky");
const Cinema = require("../../src/model/cinema");
const Theater = require("../../src/model/theater");
const Show = require("../../src/model/show");

class DbInitializer {
    async init() {
        // Re-create & populate tables.
        this.customers = await this.createCinemas();
        this.theaters = await this.createTheaters();
        this.shows = await this.createShows();

        console.info("Populated database...");
    }

    async createCinemas() {
        try {
            await thinky.r.db("test").table("Cinema").delete().run();
        } finally {
            let mockCinemas = require("./mock-cinemas.json");
            return await Promise.all(mockCinemas.map(c => Cinema(c).save()));
        }
    }

    async createTheaters() {
        try {
            await thinky.r.db("test").table("Theater").delete().run();
        } finally {
            let mockTheaters = require("./mock-theaters.json");
            return await Promise.all(mockTheaters.map(t => Theater(t).save()));
        }
    }

    async createShows() {
        try {
            await thinky.r.db("test").table("Show").delete().run();
        } finally {
            let mockShows = require("./mock-shows.json");
            return await Promise.all(mockShows.map(s => Show(s).save()));
        }
    }

    static async go() {
        const initializer = new DbInitializer();
        await initializer.init();
        process.exit();
    };
}

module.exports = DbInitializer;
