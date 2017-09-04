const express = require("express");
const Show = require("../model/show");
const MovieService = require("../service/movie-srv");

const ShowController = express.Router();

ShowController.get("/", async (req, res) => {
    try {
        let shows = await Show
            .getJoin({cinema: true, theater: true})
            .run();

        if (req.query.include_movie === "true") {
            for (show of shows) {
                show.movie = await MovieService.getMovieInfoBy(show.movieId);
            }
        }

        res.send(shows);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

ShowController.post("/", async (req, res) => {
    try {
        let show = new Show(req.body);
        let created = await show.saveAll();
        res.send(created);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

ShowController.get("/:showId", async (req, res) => {
   try {
       let show = await Show
           .get(req.params.showId)
           .getJoin({cinema: true, theater: true})
           .run();

       if (req.query.include_movie === "true") {
           show.movie = await MovieService.getMovieInfoBy(show.movieId);
       }

       res.send(show);
   } catch(e) {
       res.setStatus(500).send({message: e.toString()});
   }
});

ShowController.delete("/:showId", async (req, res) => {
    try {
        let deleted = await Show.get(req.params.showId).delete().run();
        res.send(deleted);
    } catch (e) {
        res.status(500).send({message: e.toString()});
    }
});

ShowController.put("/:showId/sales", async (req, res) => {
   try {
       if (!req.query.seats_delta) {
           throw new Error("query parameter `seats_delta` is required.");
       }

       // Find seats delta.
       let seatsDelta = Number.parseInt(req.query.seats_delta);

       if (seatsDelta === NaN) {
           throw new Error("seats delta must be an integer");
       }

       // Get show by id.
       let show = await Show.get(req.params.showId).getJoin({theater: true}).run();

       // Calculate new number of available seats.
       let seats = show.availableSeats + seatsDelta;

       // Change seats number if possible.
       if (0 <= seats && seats <= show.theater.seats) {
           show.availableSeats = seats;
           let updated = await show.saveAll();
           res.send(updated);
       }

       else throw new Error("seats delta is not valid.");
   } catch (e) {
       res.status(500).send({message: e.toString()});
   }
});

module.exports = ShowController;
