/**
 * -------------------------
 * Mongl DB Connection
 * --------------------------
 * 1.create account
 * 2.crate user with password
 * 3 whitelist IP address
 * databse > connet> driver> Node> view full code
 * Updata Password uri (Change Password)
 * 
 * 
 * ---------------------------
 * crate (POST)
 * app.post('/usera' , async(req, res))
 * Make the function async to use await inside it
 * Make sure use exprss json middleware
 * access data from the body: const users = req.body
 * const result = await userCollection.insertOne(users)
 * res.send(result)
 * 
 * 
 * CLIENT
 * 
 * crate fetch and add second parameter
 * private method "POST"
 * add headers: {
 * content-type : application/json
 * }
 * add body: JSON.stringfy(users)
 * 
 * 
 * 
 * 
 * ----------------------------------------------
 * READ MANY
 * ----------------------------------------------
 * crate a cursor = userCollection.find()
 * const result = await cursor.toArray()
 * res.send(result)
 * 
 * ----------------------------------------------
 * DELETE
 * -----------------------------------------------
 * create app.delete('/useres/:id', async(req, res) =>{})
 * specify unique object id (useing new keyword)
 * create query = {_id : new ObjectId(id)}
 * const reslt =  await userCollection.deleteOne(query);
 * 
 * 
 * Client:
 * 
 * create a dynamic url with id 
 * mention the delete method with fetch
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */