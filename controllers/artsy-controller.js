const Art = require('../models/artsy')


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
//GALLERY with user auth, find all user saved art
findAllArt = async (req, res) => {
  //check if there is a return user
  if (req.user == undefined) {
    res.status(401).json({ success: false })
    //bulma
  } else {
    await Art.find({ userId: req.user._id }, (err, arts) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!arts.length) {
          return res
              .status(404)
              .json({ success: false, error: `Art not found` })
      }
      return res.status(200).json({ success: true, data: arts })
    }).catch(err => console.log(err))
  }
  //if no user ret 401 (dont know you)
  //else find by user id
  
}

module.exports = {
  artCreate,
  findAllArt,
  artRemove,
}
// artRemove