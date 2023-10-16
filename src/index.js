const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine(`handlebars`,handlebars())
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,"resourses\\views"))
app.get('/', (req, res) => {
  return res.render("hfiabdaidbio");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})