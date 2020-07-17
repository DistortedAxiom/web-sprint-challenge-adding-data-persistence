const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res)=>{
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
    })
    .catch(error=> {
            res.status(500).json({message: error.message})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    Projects.findById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
})

router.post('/', (req, res) => {
    const bodyData = req.body

    Projects.add(bodyData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
})

module.exports = router;
