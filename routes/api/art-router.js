const router = require("express").Router();

const artController = require("../../controllers/artsy-controller.js");

const router = express.Router()


router.get('artists', artController.findAll)
router.post('/artist', artController.artCreate)
router.delete('/artist/:id', artController.artRemove)

module.exports = router;
