const express = require("express");
const bodyparser = require("body-parser");
const moongose = require("mongoose");
const dbLink = require("./moongose/properties").DB_URL;
const ArtistRouter = require("./Routes/Artist");
const LoginRouter = require("./Routes/Authentication");
const GenresRouter = require("./Routes/Genres");
const UserRouter = require("./Routes/Users");
const VisitorRoute = require("./Routes/VisitorDetails");

moongose.connect(dbLink);

moongose.connection.on("connected", () => {
  console.log("connected");
});

const app = express();

app.use(bodyparser.json());

app.use("/artist", ArtistRouter);
app.use("/login", LoginRouter);
app.use("/genres", GenresRouter);
app.use("/user", UserRouter);
app.use("/visitor", VisitorRoute);

app.listen(5001);
