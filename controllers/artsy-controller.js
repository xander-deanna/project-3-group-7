const Art = require('../models/artsy')
const { findAll } = require('../^untitled:Untitled-1')
const { artRemove } = require('../^untitled:Untitled-1')
const { artCreate } = require('../^untitled:Untitled-1')


artCreate = (req, res) => {
  const body = req.body
  
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid artist search',
    })
  }
  const art = new Art(body)

  if (!art) {
    return res.status(400).json({succe: false, error: err})
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

module.exports = {
  artCreate,
  findAll,
  artRemove,
}
// artRemove