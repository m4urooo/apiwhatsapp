const express = require('express');
const apiRoute = require('./routes');

const app = express();



//

const fs = require('node:fs');
var texto = fs.readFileSync('./tmp/logs.txt',"utf-8");



//


//const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use('/whatsapp', apiRoute);



app.get('/', async (req, res) => {

    res.send('Hello from App Engine!');


});

app.get('/tmp', async (req, res) => {

   console.log(texto);

});

app.use("/whatsapp", apiRoute);




app.listen(PORT,()=>{
    console.log("el puerto es: " + PORT)
});