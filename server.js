const mongooseLib = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const { default: mongoose } = require('mongoose');
const { ObjectId } = require('mongoose');
const createController = require('../warpsteed-ecom/server/controllers/createUserController');
//import App from '/front/src/App';

const port = 3000

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

//Connects to mongooose database and opens application to port. 
app.listen(port, async () => {

  console.log(`app listening on port ${port}`);
  await mongooseLib.connect('mongodb://127.0.0.1:27017/warpsteed-ecom-local', { serverSelectionTimeoutMS: 5000});
  console.log("database connect");

  const MyModel = mongooseLib.model('Test', new mongooseLib.Schema({ name: String, age: Number, email: String }));
  
  MyModel.createCollection().then( function (collection) {
    console.log("collection made");
});

  // Connects to the signup screen and delivers the signup page to the user.
app.get('/signup', (req, res) => {
  createController.createNewUser();
  console.log(req);
  console.log(res);
  
});//user



app.get('/api/', (req, res) => {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  const testObj = res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

  // This creation method works when linked ot the local database.
/*
  const result = MyModel.create({
  name : "Tom Brady",
  age : 39, 
  email : "realgoon@gmail.com"});

  const resultTwo = MyModel.create({
    name : "Ice Space",
    age : 22, 
    email : "realgal@gmail.com"});

   

  console.log(result);
*/
});






app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

})

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, 'front', 'public', 'index.html'));
});
