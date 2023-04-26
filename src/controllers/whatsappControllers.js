const fs = require("fs");
const myConsole = new console.
Console(fs.createWriteStream("./logs.txt"));


const VerifyToken= (req,res) =>{
    myConsole.log("ACA");


    try{
        myConsole.log("No pasa nada");

        var accessToken="TOKENAQUI123";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
            myConsole.log("No pasa nada");

        }else{
            myConsole.log("No pasa nada");

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
  

    try{
      



        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        myConsole.log(messageObject);



        res.send("EVENT_RECEIVED");


    }catch(e){
        res.send("EVENT_RECEIVED");
        myConsole.log(messageObject);


    }
}

module.exports={
    VerifyToken,
    ReceivedMessage
}