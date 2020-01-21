const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const methodOverride = require('method-override');
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.redirect('/dogs');
});

// CREATE

app.get('/dogs/new', (req, res) => {
  res.render('dogs/new');
});

app.post('/dogs', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(422).send('Please include a name for the dog to create');
    return;
  }

  const id = uuid();
  DOGS_DB[id] = { id, name };

  res.redirect(`/dogs/${id}`);
});

// READ

app.get('/dogs', (req, res) => {
  const dogs = Object.values(DOGS_DB);
  const templateVars = { dogs };
  res.render('dogs/index', templateVars);
});

app.get('/dogs/:uuid', (req, res) => {
  const { uuid } = req.params;
  const dog = DOGS_DB[uuid];

  if (!dog) {
    res.status(404).send(`Cannot find dog with id: ${uuid}`);
    return;
  }

  const templateVars = { dog };
  res.render('dogs/show', templateVars);
});

// EDIT

app.get('/dogs/:uuid/edit', (req, res) => {
  const { uuid } = req.params;
  const dog = DOGS_DB[uuid];

  if (!dog) {
    res.redirect('/dogs/new');
    return;
  }

  res.render('dogs/edit', { dog });
});

app.put('/dogs/:uuid', (req, res) => {
  const { uuid } = req.params;
  const dog = DOGS_DB[uuid];

  if (!dog) {
    res.status(422).send(`Cannot find dog with id: ${uuid}`);
    return;
  }

  const { name } = req.body;
  dog.name = name;

  res.redirect(`/dogs/${uuid}`);
});

// DELETE

app.delete('/dogs/:uuid', (req, res) => {
  const { uuid } = req.params;
  const dog = DOGS_DB[uuid];

  if (!dog) {
    res.status(422).send(`Cannot find dog with id: ${uuid}`);
    return;
  }

  delete DOGS_DB[uuid];
  res.redirect('/dogs');
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
