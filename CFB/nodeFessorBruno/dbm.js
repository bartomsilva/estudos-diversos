
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bartomsilva:12345678901234567890@cluster0.o1cxv6v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("bartestudo").collection("cursonode");
  // perform actions on the collection object

    // Inserting single document
    collection.insertOne({
        "name": "aayush", "idade": "55" });

    //inserting multiple document
    collection.insertMany([
        { "name": "saini", "idae": "33" },
        { "name": "GfGnew", "idade": "34" } ]);

    console.log("Insertion Successfull")

  client.close();
});

 

   

