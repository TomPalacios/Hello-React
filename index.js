const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const morgan   = require('morgan');
const path = require('path');

const port = process.env.PORT        || 4000;
const db   = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/notas';

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
  
  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));
  app.use('/api', require('./api/routes/note'));
  app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    // para mas detalles usar: console.error(err.stack)
    res.json({ error: err.message });
  });
  
  

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    
});