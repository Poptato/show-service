const express = require("express");

const InfoController = express.Router();

InfoController.get("/", (req, res) => {
    res.send({
        name: process.env.npm_package_name,
        version: process.env.npm_package_version
    });
});

InfoController.get("/status", (req, res) => res.sendStatus(200));

module.exports = InfoController;