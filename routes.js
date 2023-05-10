const expres = require('express');
const router = expres.Router();
const  whatsAppController = require('./src/controllers/whatsappControllers');


router
.get("/",whatsAppController.VerifyToken )
.post("/", whatsAppController.ReceivedMessage)

module.exports = router;

