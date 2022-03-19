const BaseRoutes = require("./Base").router;
const PostRoutes = require("./Post").router;




module.exports = (app) => {
    app.use("/", BaseRoutes),
    app.use("/api/posts", PostRoutes)
}