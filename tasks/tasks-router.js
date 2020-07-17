const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res)=>{
    Tasks.find()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    Tasks.findById(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
})

router.post('/', (req, res) => {
    const bodyData = req.body

    Tasks.add(bodyData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
})

module.exports = router;
