const express = require('express');
const router = express.Router();

const LuxController = require('../controller/luxController');
const luxController = new LuxController;

router.get("/", function(req, res){
    luxController.findAll(res);
});

router.get("/id/:user_id", function (req, res) {
    luxController.findById(req, res);
});

router.post("/createUser", function(req, res){
    luxController.createUser(req, res)
});

router.post("/createHome", function(req, res){
    luxController.createHome(req,res)
});

router.post("/createAmenities", function(req, res){
    luxController.createAmenities(req,res)
});

router.delete("/delete/:id", function(req, res) {
    luxController.deleteById(req, res)
});

module.exports = router;