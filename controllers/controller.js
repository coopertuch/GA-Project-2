const express = require("express")
const router = express.Router()
const cheerupsModel = require('../models/cheerups')
module.exports = router

router.get("/", (req, res) => {
    cheerupsModel.find({}).then(cheerupsList => res.render('index', { cheerupsList }))
})

router.delete('/:id', (req, res) => {
    cheerupsModel.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/new', (req, res) => {
    cheerupsModel.create(req.body)
      .then(myNewCheerup => {
        res.redirect('/')
      })
})

router.get('/edit/:id', (req, res) => {
    cheerupsModel.findOne({_id: req.params.id})
      .then(cheerup => {
        res.render('edit', { cheerup })
      })
})

router.put('/:id', (req, res) => {
    cheerupsModel.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(cheerup => {
        res.redirect('/')
      })
})