import {firebaseconfig} from './environments';

const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Add additional services that you want to use
require("firebase/database");

// Firebase App is always required and must be first
let firebase = require("firebase/app");

// Firebase initialize config
firebase.initializeApp(firebaseconfig);

let db = firebase.database().ref();

bot.on('message', (ctx) => {

    //firebase search
    db.orderByChild("vopros").equalTo(ctx.message.text).on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData.otvet);
            ctx.telegram.sendMessage(ctx.from.id, childData.otvet);

        });
    });
});

bot.launch();
