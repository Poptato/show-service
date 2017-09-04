const server = require("../../src/server");

// Models
const Cinema = require("../../src/model/cinema");
const Show = require("../../src/model/show");
const Theater = require("../../src/model/theater");

// Reference movies.
const avengers_id = "4fc42ea3-9918-4f69-b27c-a899c5c47af4";
const avengers2_id = "26682488-eda7-4b97-8cb6-08f71252d5de";
const ironman_id = "8c5bf4a8-6e50-4b6e-8a4c-a23256a9d20f";
const captainamerica_id = "0b7abbb4-c286-4e5a-a2d8-1927295c99be";

async function initDb() {
    /*
     * Cinema
     */
    const GlobosMax =await Cinema({
        id: "6de5d16c-3762-4472-9497-9d2d39b21bec",
        name: "Globos Max",
        address: "Lod"
    }).save();

    const CinemaCity =await Cinema({
        id: "14391643-2d9c-4301-9d0a-ea002e062694",
        name: "Cinema City",
        address: "Ashdod"
    }).save();


    /*
     * Theater
     */
    const GlobosMax1 = await Theater({
        id: "a6dca98f-33cd-46ec-ae9a-792f747c1800",
        name: "GlobosMax 1",
        seats: 40,
        cinemaId: GlobosMax.id
    }).save();

    const GlobosMax2 = await Theater({
        id: "8c22b35c-0ef0-4a18-881c-ebb3fa2e6385",
        name: "GlobosMax 2",
        seats: 50,
        cinemaId: GlobosMax.id
    }).save();

    const GlobosMax3 = await Theater({
        id: "a4d636ed-9c6f-4540-bee2-84fd9927974e",
        name: "GlobosMax 3",
        seats: 40,
        cinemaId: GlobosMax.id
    }).save();

    const CinemaCity1 = await Theater({
        id: "e47e3784-30a2-41b6-8ba5-2cee7b0b78c4",
        name: "CinemaCity 1",
        seats: 60,
        cinemaId: CinemaCity.id
    }).save();

    const CinemaCity2 = await Theater({
        id: "156ba430-e210-4f0f-871f-8ae6832e36d4",
        name: "CinemaCity 2",
        seats: 50,
        cinemaId: CinemaCity.id
    }).save();

    const CinemaCity3 = await Theater({
        id: "f36e01e8-b974-4fdb-a212-8949c18783ad",
        name: "CinemaCity 3",
        seats: 40,
        cinemaId: CinemaCity.id
    }).save();

    /*
     * Show
     */
    const AvangerG = await Show({
        id: "c95d1fce-58a8-4046-9b46-57ccdf064461",
        time: new Date(1, 10, 17),
        availableSeats: 40,
        movieId: avengers_id,
        cinemaId: GlobosMax.id ,
        theaterId: GlobosMax1.id
    }).save();

    const Avanger2G = await Show({
        id: "97bb0034-cca9-4cbd-97a4-7fc892a1a2a7",
        time: new Date(1, 10, 17),
        availableSeats: 50,
        movieId: avengers2_id,
        cinemaId: GlobosMax.id ,
        theaterId: GlobosMax2.id
    }).save();

    const IronManG = await Show({
        id: "eb0c6d1b-ada3-4666-bb07-3f31a43567da",
        time: new Date(1, 10, 17),
        availableSeats: 40,
        movieId: ironman_id,
        cinemaId: GlobosMax.id ,
        theaterId: GlobosMax3.id
    }).save();

    const AvangerC = await Show({
        id: "3403989a-9e4f-494a-915d-d9b8e11b175c",
        time: new Date(1, 10, 17),
        availableSeats: 60,
        movieId: avengers_id,
        cinemaId: CinemaCity.id ,
        theaterId: CinemaCity1.id
    }).save();

    const Avanger2C = await Show({
        id: "22b62a56-8392-44fb-90b3-2d05b4a29e19",
        time: new Date(1, 10, 17),
        availableSeats: 50,
        movieId: avengers2_id,
        cinemaId: CinemaCity.id ,
        theaterId: CinemaCity2.id
    }).save();

    const CaptainAmericaC = await Show({
        id: "fafdd5eb-c5f3-4c90-a083-ef9f2e52ee5e",
        time: new Date(1, 10, 17),
        availableSeats: 40,
        movieId: captainamerica_id,
        cinemaId: CinemaCity.id ,
        theaterId: CinemaCity3.id
    }).save();
}

initDb();
