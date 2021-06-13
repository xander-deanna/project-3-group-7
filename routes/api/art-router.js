const router = require("express").Router();

const artController = require("../../controllers/artsy-controller.js");


router.get('/', artController.findAllArt)
router.post('/', artController.artCreate)
router.delete('/:id', artController.artRemove)

module.exports = router;
