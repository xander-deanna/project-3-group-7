const router = require("express").Router();
const passport = require("passport");

const artController = require("../../controllers/artsy-controller.js");


router.get('/', passport.authenticate('jwt', { session: false }), artController.findAllArt)
router.post('/', passport.authenticate('jwt', { session: false }), artController.artCreate)
router.delete('/:id', passport.authenticate('jwt', { session: false }), artController.artRemove)

module.exports = router;
