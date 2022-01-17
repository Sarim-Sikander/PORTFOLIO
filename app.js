const express = require("express");
const path = require("path")

app = express();

port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/',  (req, res) => {
    res.render('index')
})

app.listen(port, (err) => {
    console.log(err)
});