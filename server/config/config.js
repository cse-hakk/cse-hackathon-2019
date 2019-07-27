module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || "Ecotrip",
    user: process.env.DB_USER || "Ecotrip",
    password: process.env.DB_PASS || "Ecotrip",
    options: {
      dialect: (process.env.DIALECT = "sqlite"),
      host: process.env.HOST || "localhost",
      storage: "../ecoTrip.sqlite"
    }
  }
};
