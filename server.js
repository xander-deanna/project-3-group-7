const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const users = require("./routes/api/users");
const artRouter = require("./routes/api/art-router");
const path = require("path");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

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

// Passport middleware
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/artists", artRouter);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));