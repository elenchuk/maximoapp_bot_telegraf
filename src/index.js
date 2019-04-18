// Import environments
import {firebaseconfig} from './environments';
import {telegram_token} from "./environments";

// Require Telefraf libraries
const Telegraf = require('telegraf');
const Composer = require('telegraf/composer');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const Markup = require('telegraf/markup');
const WizardScene = require('telegraf/scenes/wizard');

// Create multiaccount composer
const composer = new Telegraf.Composer();

// Add additional services that you want to use
require("firebase/database");

// Firebase App is always required and must be first
let firebase = require("firebase/app");

// Firebase initialize config
firebase.initializeApp(firebaseconfig);

// All db
let db = firebase.database().ref();

// Answer table
// let questions = db.child('aq_db/');

// // Users table
// let users = db.child('users/');

// Create questions object
let questions;

// Create user settings object
let user_settings = {};

// Listen firebase for changes
db.on('value', function (snapshot) {

    // Take all users uid from firebase
    for(var key in snapshot.val()){

        // Set settings from firebase by user uid
        let settings = db.child(key + '/settings/');
        settings.once('value', function (snapshot) {

            // Search by one value
            snapshot.forEach(function(childSnapshot) {
                var telegram_token = childSnapshot.val();

                // Add all telegram tokens to user settings object
                user_settings[telegram_token]=key;
                console.log(telegram_token + ' ' + key);

                // Create new Telefram bot class with token
                const bot = new Telegraf(telegram_token)
                bot.use(composer)
                bot.startPolling()


            });
        });

    }



    // Logic start



    // Add user info data on start command
    composer.start((ctx) => {
        // Start message
        ctx.reply('Hello, ' + ctx.message.from.first_name + ' ' + user_settings[ctx.tg.token]);

        // Users table
        let users = db.child(user_settings[ctx.tg.token] + '/users/');
        var user_info = users.child(ctx.message.from.id);

        user_info.set({
            id: ctx.message.from.id,
            first_name: ctx.message.from.first_name,
            last_name: ctx.message.from.first_name,
            start_text: '',
            user_phone: '',
            username: ctx.message.from.username

        });

    });



    // Users questions and answers
    composer.on('message', (ctx) => {
        questions = db.child(user_settings[ctx.tg.token] + '/aq_db/');
        //firebase search
        questions.orderByChild("question").equalTo(ctx.message.text).once('value', function (snapshot) {
            // Random answer
            if(snapshot.val()){
                var rand_answer = Math.floor(Math.random()*(snapshot.numChildren()));
                var childData = snapshot.val()[Object.keys(snapshot.val())[rand_answer]];
                ctx.telegram.sendMessage(ctx.from.id, childData.answer);
            }else {
                ctx.telegram.sendMessage(ctx.from.id, 'no answer(');
            }
        });
    });





    // Logic end



});








// Add user info data on start command
// bot.start((ctx) => {
//
//     // Start message
//     ctx.reply('Hello, ' + ctx.message.from.first_name)
//
//     var user_info = users.child(ctx.message.from.id);
//
//     user_info.set({
//         id: ctx.message.from.id,
//         first_name: ctx.message.from.first_name,
//         last_name: ctx.message.from.first_name,
//         start_text: '',
//         user_phone: '',
//         username: ctx.message.from.username
//
//     });
//
//
// });

// Users questions and answers
// bot.on('message', (ctx) => {
//
//     //firebase search
//     questions.orderByChild("question").equalTo(ctx.message.text).once('value', function (snapshot) {
//
//         // Random answer
//         if(snapshot.val()){
//             var rand_answer = Math.floor(Math.random()*(snapshot.numChildren()));
//             var childData = snapshot.val()[Object.keys(snapshot.val())[rand_answer]];
//             ctx.telegram.sendMessage(ctx.from.id, childData.answer);
//         }else {
//             ctx.telegram.sendMessage(ctx.from.id, 'no answer(');
//         }
//
//
//         // Search by one value
//         // snapshot.forEach(function(childSnapshot) {
//         //
//         //     var key = childSnapshot.key;
//         //     var childData = childSnapshot.val();
//         //     ctx.telegram.sendMessage(ctx.from.id, childData.answer);
//         //
//         // });
//     });
// });



// Launch Telegraf bot
// bot.launch();


// composer.command("start", Telegraf.reply("Hello world!"));



// var tokens = ['464320818:AAFleQhEampTVJfLV_1xN1xNsQhjS-F9rgk','374400307:AAESYl39Ym3fmJN5ZibE2zFf1f0CEmdh9mA']

// for (const token of tokens) {
//     const bot = new Telegraf(token)
//     bot.use(composer)
//     bot.startPolling()
// };
