const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res)=>{
    Resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    Resources.findById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
})

router.post('/', (req, res) => {
    const bodyData = req.body

    Resources.add(bodyData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
})

module.exports = router;
