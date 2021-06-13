const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const users = require("./routes/api/users");
const artRouter = require("./routes/api/art-router");
const artsyRouter = require("./routes/api/artsy-router");
const path = require("path");
require("dotenv").config();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/meseum',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
}));


// Routes
app.use("/api/users", users);
app.use("/api/artists", artRouter);
app.use("/api/artsy", artsyRouter);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));