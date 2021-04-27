const path = require("path");

const express = require("express");

const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("./images/test.jpg")

module.exports = {
    "test":"./images/test.jpg"
}
