const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware 
app.use(cors());
app.use(express.json());


//user id : abulkasem32833
//password : Xe8pzIKZQ8H99snR


// mongo db settings


const uri = "mongodb+srv://abulkasem32833:Xe8pzIKZQ8H99snR@cluster0.pygokcx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // send data to databse
    // const databse = client.db("usersDB");
    // const userCollection = databse.collection("users");

    const userCollection = client.db("usersDB").collection('users')

//get data
    app.get('/users', async (req, res)=>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
// Submit/add data
    app.post('/users', async(req, res)=>{
        const user = req.body;
        console.log('new User', user);
        const result = await userCollection.insertOne(user);
        res.send(result);
    })

    // delete data
    app.delete('/users/:id', async(req, res)=>{
      const id = req.params.id;
      console.log('please delete form dtatabase', id);
      const query = { _id : new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client .close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Simple CRUD is Running')
})

app.listen(port, ()=>{
    console.log(`CRUD server is Running ${port}`)
})