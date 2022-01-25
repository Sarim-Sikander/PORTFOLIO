const express = require("express");
const path = require("path")
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin")

app = express();

port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes)

app.listen(port, (err) => {
    console.log(err)
});