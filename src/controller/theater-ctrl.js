const express = require("express");
const Theater = require("../model/theater");
const Show = require("../model/show");

const TheaterController = express.Router();

TheaterController.get("/", async (req, res) => {
    try {
        let theaters = await Theater
            .getJoin({cinema: true, shows: true})
            .run();

        res.send(theaters);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

TheaterController.post("/", async (req, res) => {
    try {
        let theater = new Theater(req.body);
        let created = await theater.saveAll();
        res.send(created);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

TheaterController.get("/:theaterId", async (req, res) => {
   try {
       let theater = await Theater
           .get(req.params.theaterId)
           .getJoin({cinema: true, shows: true})
           .run();

       res.send(theater);
   } catch (e) {
       res.status(500).send({message: e.toString()});
   }
});

TheaterController.delete("/:theaterId", async (req, res) => {
    try {
        let deleted = Theater.get(req.params.theaterId).delete().run();
        res.send(deleted);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

TheaterController.post("/:theaterId/shows/:showId", async (req, res) => {
    try {
        let theater = await Theater.get(req.params.theaterId).getJoin({theater: true}).run();
        let show = await Show.get(req.params.showId).run();

        theater.shows.push(show);

        let updated = await theater.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

TheaterController.delete("/:theaterId/shows/:showId", async (req, res) => {
    try {
        let theater = await Theater.get(req.params.theaterId).getJoin({cinema: true, shows: true}).run();
        let show = await Show.get(req.params.showId).run();

        theater.shows.splice(theater.shows.find(show), 1);

        let updated = await theater.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

module.exports = TheaterController;
