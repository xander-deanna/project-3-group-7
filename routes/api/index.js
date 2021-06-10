const router = require("express").Router();
const artRoutes = require("./art-router");
const User = require("./users");

// Art routes
router.use("/art", artRoutes );
//user route
router.use("/users", userRoutes);

module.exports = router;
