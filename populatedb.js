const mongoose = require('mongoose');
const User = require('./models/User');
const db = 'mongodb+srv://helloreact:tommy0102@cluster0.u8pav.mongodb.net/helloreact?retryWrites=true&w=majority'
  mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      console.log(`${users.length} documents inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));