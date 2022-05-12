const express = require('express');
const path = require('path');
const urllib = require('urllib');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => res.send('Hello World'));
app.get('/sanity', (req, res) => res.send('OK'));

let parsedData;

const callTheAPI = (param) => {
  urllib.request(
    `https://recipes-goodness.herokuapp.com/recipes/${param}`,
    function (err, data, response) {
      if (err) {
        throw err;
      }
      response.body;
      parsedData = JSON.parse(data).results.map((recipes) => {
        return {
          title: recipes.title,
          thumbnail: recipes.thumbnail,
          href: recipes.href,
          ingredients: recipes.ingredients,
        };
      });
    }
  );
};

app.get('/recipes/:ingredient', (req, res) => {
  const param = req.params.ingredient;
  callTheAPI(param);
  res.send(parsedData);
});

const PORT = 8080;
app.listen(PORT, console.log('Listening on', PORT));
