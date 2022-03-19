const express = require("express");
const router = require("express").Router();
const { add } = require('../controllers/Post');

router.post("/add", add)

module.exports = {
    router,
}