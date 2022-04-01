const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;//for hosting we use this method
const staticpath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, '../template/partials');

app.set('view engine', 'hbs');//to use hbs files in my code
app.set('views', templatePath);
console.log(templatePath);
hbs.registerPartials(partialPath);
console.log(partialPath);

app.use(express.static(staticpath));

app.get('/', (req, res) => {
    res.render('index'); 
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('*', (req, res) => {
    res.render('404error');
});

app.listen(port, () => {
    console.log(`listning to the port ${port}`);
});