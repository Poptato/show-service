const express = require("express");
const Cinema = require("../model/cinema");
const Theater = require("../model/theater");
const Show = require("../model/show");

const CinemaController = express.Router();

CinemaController.get("/", async (req, res) => {
    try {
        let cinemas = await Cinema
            .getJoin({shows: true, theaters: true})
            .run();

        res.send(cinemas);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.post("/", async (req, res) => {
    try {
        let cinema = new Cinema(req.body);
        let created = await cinema.saveAll();
        res.send(created);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.get("/:cinemaId", async (req, res) => {
   try {
       let cinema = await Cinema
           .get(req.params.cinemaId)
           .getJoin({shows: true, theaters: true})
           .run();

       res.send(cinema);
   } catch (e) {
       res.status(500).send({message: e.toString()});
   }
});

CinemaController.delete("/:cinemaId", async (req, res) => {
    try {
        let deleted = Cinema.get(req.params.cinemaId).delete().run();
        res.send(deleted);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.post("/:cinemaId/theaters/:theaterId", async (req, res) => {
    try {
        let cinema = await Cinema.get(req.params.cinemaId).getJoin({theater: true}).run();
        let theater = await Theater.get(req.params.theaterId).run();

        cinema.theaters.push(theater);

        let updated = await cinema.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.delete("/:cinemaId/theaters/:theaterId", async (req, res) => {
    try {
        let cinema = await Cinema.get(req.params.cinemaId).getJoin({theater: true}).run();
        let theater = await Theater.get(req.params.theaterId).run();

        cinema.cast.splice(cinema.theaters.find(theater), 1);

        let updated = await cinema.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.post("/:cinemaId/shows/:showId", async (req, res) => {
    try {
        let cinema = await Cinema.get(req.params.cinemaId).getJoin({shows: true}).run();
        let show = await Show.get(req.params.showId).run();

        cinema.shows.push(show);

        let updated = await cinema.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

CinemaController.delete("/:cinemaId/shows/:showsId", async (req, res) => {
    try {
        let cinema = await Cinema.get(req.params.cinemaId).getJoin({shows: true}).run();
        let show = await Show.get(req.params.showId).run();

        cinema.shows.splice(cinema.shows.find(show), 1);

        let updated = await cinema.saveAll();
        res.send(updated);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

module.exports = CinemaController;
