const router = require("express").Router();

const artsyAPI = require("../../controllers/arsty-api");

router.get('/', artsyAPI.getArtist)

module.exports = router;