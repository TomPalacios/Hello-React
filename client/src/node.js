var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://helloreact:tommy0102@cluster0.u8pav.mongodb.net/helloreact?retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});