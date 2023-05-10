const fs = require('node:fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();



const { appendFile} = require('fs/promises');

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'w' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

// fs.writeFileSync('https://storage.googleapis.com/impressive-hull-385817.appspot.com/test/doc.txt', 'w');
// console.log('File created');

//local './tmp/logs.txt' 
//gloud '/tmp/logs.txt'
const myConsole = new console.Console(fs.createWriteStream('tmp/logs.txt'));

// file_put_contents("gs://impressive-hull-385817.appspot.com/logs.txt", $newFileContent);
// $fp = fopen("gs://impressive-hull-385817.appspot.com/logs.txt", "w");
// $fp = fopen("gs://${default_bucket}/hello_default_stream.txt", 'w');

// fwrite($fp, "Hello");
// fclose($fp);





const VerifyToken= (req,res) =>{
    myConsole.log("ACA");


    try{
        myConsole.log("No pasa nada 1");

        var accessToken="TOKENAQUI123";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
            myConsole.log("No pasa nada 2");

        }else{
            myConsole.log("No pasa nada 3");

            res.status(400).send();
        }



    }catch(e){
        myConsole.log("No pasa nada");

        res.status().send();
        myConsole.log(messageObject);
        myConsole.log("No pasa nada");


    }
}
const ReceivedMessage= (req,res) =>{
  
    myConsole.log("pase recibido");


    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        var messages = messageObject[0];
        var text = GetTextUser(messages);
        myConsole.log(text);


        res.send("EVENT_RECEIVED");
        myConsole.log('aqui estoy ahora, dentro del try2');


    }catch(e){
        res.send("EVENT_RECEIVED");
        myConsole.log(messageObject);


    }
}

function GetTextUser(messages){
    var text =  "";
    var typeMessage = messages["type"];

    if(typeMessage == "text"){
        text = (messages["text"])["body"];


    }else if(typeMessage == "interactive"){
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        myConsole.log(interactiveObject);

        if(typeInteractive == "button_reply"){
            text= (interactiveObject["button_reply"])["title"];


        }else if(typeInteractive == "list_reply"){
            text= (interactiveObject["list_reply"])["title"];


        }else{
            myConsole.log("sin mensaje");
        }


    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}



module.exports={
    VerifyToken,
    ReceivedMessage
}