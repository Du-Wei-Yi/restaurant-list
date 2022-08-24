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
//4
app.get("/restaurants/:restaurant_id", (req, res) => {
  // console.log(Number(req.params.restaurant_id), restaurantList.results[0].id)
  const chosenRes = restaurantList.results.find(item => item.id.toString() === req.params.restaurant_id)
  res.render('show', { chosenRes })
})
//5
app.get("/search", (req, res) => {
  const searchRes = restaurantList.results.filter((item) => {
    const searchWord = req.query.keyword.toLowerCase()
    if (item.name.toLowerCase().includes(searchWord) || item.name_en.toLowerCase().includes(searchWord) || item.category.toLowerCase().includes(searchWord) || item.description.toLowerCase().includes(searchWord)) {
      return item
    }
  })
  res.render('index', { restaurant: searchRes, keyword: req.query.keyword })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})