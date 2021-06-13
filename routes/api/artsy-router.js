const router = require("express").Router();

const artsyAPI = require("../../controllers/artsy-api.js");


router.get('/', artController.findAllArt)
router.post('/', artController.artCreate)
router.delete('/:id', artController.artRemove)

module.exports = router;