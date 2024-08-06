const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"8C0kAvHLlUjCKt3hKZncxJWqVyZQHAxjZ9Oc2nTqj0s="},"public":{"type":"Buffer","data":"68cwM5YXI2UOc+UNAW1Q6BVvPST+2402+HAdy9jszDQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+EQrCCB7gQJMeaOJL0/pcawYqhLipDpBxkXmYT6L3mU="},"public":{"type":"Buffer","data":"bFJWn0GxOzNz/P65I2j4gMrsOJa04bcG+Y/xTGHqhVU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KBXdnkiuveMpzr82GgH1TMSF9oP0ypAaS7ZITsRGY2s="},"public":{"type":"Buffer","data":"J26yNgFTEIxHpU3dXM4H8DCQbNM6aAYdm6jw1Wrgrkw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uPeKd1vFuTIjt0+uJUkgBJNkbiYQkUoIaine3hDY9Xs="},"public":{"type":"Buffer","data":"9kfWWqHZWF9PsOzd9u74+z+Tn9f1dwVLe2tHVYCm6ww="}},"signature":{"type":"Buffer","data":"08UH3KlyPapvy/4ceSX0tfW5Ydvnx+KZuwi5RMlEoABu87a3CQ0W9I5e4kH7ESNW5deHXSgr9lP3vUuGhtMTBg=="},"keyId":1},"registrationId":117,"advSecretKey":"LiXiAHK6sWRh8PsytPEeqj1TRBVrtBHDQovZFuMFjLk=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Xgt0kzHuT2W8bfssBNaOCg","phoneId":"789bf94a-6b55-4662-a309-3d91ac4d10dd","identityId":{"type":"Buffer","data":"0gOhC6MnqcwtzxcFeWjtGrLSK6U="},"registered":true,"backupToken":{"type":"Buffer","data":"xc+9JT3fVtUoUgq43BL09tYM0gE="},"registration":{},"pairingCode":"B88Z1JC3","me":{"id":"2348078854373:79@s.whatsapp.net"},"account":{"details":"COrJ2M8HEN6WybUGGAEgACgA","accountSignatureKey":"SnFj2X+2127/0LTc/3P5MDzFs4wrYkRtPe+/6K0hJEg=","accountSignature":"tvUeQ8mVSIIbCg7AxWMdN6NeZHu8waFw8KyFQTxDUfcbuOnBbARhtgymGoWa3yLeElFmbCckom2hc5f07YBwDQ==","deviceSignature":"NUD8l6L7+VdvZ+D1FzHk0lb8zSPIxzB9mnu4BD6x7xfsGMZDgnN27BUaslFVOf0I7oohyEd7GnHMX0ApQAYFAA=="},"signalIdentities":[{"identifier":{"name":"2348078854373:79@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUpxY9l/ttdu/9C03P9z+TA8xbOMK2JEbT3vv+itISRI"}}],"platform":"android","lastAccountSyncTimestamp":1722960749}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
