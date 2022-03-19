const express = require("express");
const router = require("express").Router();
const { home, about, post, update, add } = require('../controllers/Base');

router.get("/", home)
router.get("/about", about)
router.get("/post/:id", post)
router.get("/add-post", add)
router.get("/edit/:id", update)


module.exports = {
    router,
}