const express = require("express");
const bodyparser = require("body-parser");
const moongose = require("mongoose");
const dbLink = require("./moongose/properties").DB_URL;
const ArtistRouter = require("./Routes/Artist");
const LoginRouter = require("./Routes/Authentication");
const GenresRouter = require("./Routes/Genres");

moongose.connect(dbLink);

moongose.connection.on("connected", () => {
  console.log("connected");
});

const app = express();

app.use(bodyparser.json());

app.use("/artist", ArtistRouter);
app.use("/login", LoginRouter);
app.use("/genres", GenresRouter);

app.listen(5001);
