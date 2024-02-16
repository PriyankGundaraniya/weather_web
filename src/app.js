var path = require('path');
var hbs = require('hbs');
var express = require('express');
var app = express();

var static_path = path.join(__dirname, '../public')
var template_path = path.join(__dirname, '../templates/views')
var partial_path = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path));


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/weather', (req, res) => {
    res.render("weather")
})

app.get('*', (req, res) => {
    res.render("404error")
})

app.listen(2000, () => {
    console.log("done!!!");

})