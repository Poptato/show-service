const Thinky = require("thinky");

const thinky = new Thinky({
    // Database connection settings.
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT),
    db: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,

    // Thinky model handling settings.
    validate: "oncreate",
    enforce_missing: true,
    enforce_extra: "remove"
});

module.exports = thinky;