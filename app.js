const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const restaurantList = require("./restaurant.json")
const port = 3000;
// 2
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
// 3 
app.use(express.static("public"))
// 1 
app.get("/", (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})