const express = require('express');
const PORT = process.env.PORT || 8080;

const DOGS_DB = {
  '051c32a3-721d-4420-9263-2227fef9001b': {
    id: '051c32a3-721d-4420-9263-2227fef9001b',
    name: 'Gabriel'
  },
  '3f6d84b5-4097-473c-a1b8-08cee304d054': {
    id: '3f6d84b5-4097-473c-a1b8-08cee304d054',
    name: 'Jack'
  },
  '77d7c26c-e22a-4f5d-8ef2-2e5b0611b2ce': {
    id: '77d7c26c-e22a-4f5d-8ef2-2e5b0611b2ce',
    name: 'Goldie'
  }
};

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/dogs');
});

app.get('/dogs', (req, res) => {
  const dogs = Object.values(DOGS_DB);
  const templateVars = { dogs };
  console.log(templateVars);
  res.render('dogs/index', templateVars);
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
