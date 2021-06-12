const Art = require('../models/artsy')


artCreate = (req, res) => {
  const body = req.body
  console.log(req.body)
  
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid artist search',
    })
  }
  const art = new Art(body)
  console.log("art body")

  if (!art) {
    return res.status(400).json({success: false, error: err})
  }

  art 
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: art._id,
        message: 'Art saved!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Art not saved.'
      })
    })
}

artRemove = async (req, res) => {
  await Art.findOneAndDelete({_id: req.params.id}, (err, art) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!art) {
      return res
          .status(404)
          .json({ success: false, error: `Art not found`})
    }

    return res.status(200).json({ success: true, data: art })

  }).catch(err => console.log(err))

}

findAllArt = async (req, res) => {
  res.status(200).json({success: false})
}

module.exports = {
  artCreate,
  findAllArt,
  artRemove,
}
// artRemove