const express = require("express");
const bodyParser = require("body-parser");
const populateRoute = require("./routes/populate");
const app = express();
const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", populateRoute);



app.use((req, res, next) => {
    res.status(302).send(`Head over to /signup`);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});