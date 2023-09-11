const express = require('express');
const app = express();
const path = require('path');
//import App from '/front/src/App';


const port = 3000

//app.use(express.static(path.join(__dirname, "front", "public")));

app.get('/', (req, res) => {
    //const component = reactDOMServer.renderToString(<App />);
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

})

app.get('/home', (req,res) => {
    res.send("This is the react page.")
})



/*
app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  }); //Line 11

  */

/* 
app.get('/', (req, res) => {
  res.send('Hello World! NERDS');
  console.log("Hello server");
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})