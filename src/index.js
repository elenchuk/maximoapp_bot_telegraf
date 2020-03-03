// Import environments
import {firebaseconfig} from './environments';

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

// Create questions object
let questions;

// Create user settings object
let user_settings = {};

// Listen firebase for changes
db.on('value', function (snapshot) {

    // Take all users uid from firebase
    for (var user_key in snapshot.val()) {

        // Set settings from firebase by user uid
        let projects = db.child(user_key + '/projects/');
        projects.on('value', function (snapshot) {

            for (const project_key in snapshot.val()) {

                snapshot.forEach(function (childSnapshot) {
                    const project_data = childSnapshot.val();

                    // Add all telegram tokens to user settings object
                    user_settings[project_data.telegram_token] = user_key;
                    console.log(project_data.telegram_token + ' ' + user_key);

                    // Create new Telefram bot class with token
                    const bot = new Telegraf(project_data.telegram_token);
                    bot.use(composer);
                    bot.startPolling();


                });
            }

            // Search by one value
            // snapshot.forEach(function(childSnapshot) {
            //     var telegram_token = childSnapshot.val();
            //
            //     // Add all telegram tokens to user settings object
            //     user_settings[telegram_token]=key;
            //     console.log(telegram_token + ' ' + key);
            //
            //     // Create new Telefram bot class with token
            //     const bot = new Telegraf(telegram_token)
            //     bot.use(composer)
            //     bot.startPolling()
            //
            //
            // });
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
        questions = db.child(user_settings[ctx.tg.token] + '/modules/aq/aq_db/');
        //firebase search
        questions.orderByChild("question").equalTo(ctx.message.text).once('value', function (snapshot) {
            // Random answer
            if (snapshot.val()) {
                var rand_answer = Math.floor(Math.random() * (snapshot.numChildren()));
                var childData = snapshot.val()[Object.keys(snapshot.val())[rand_answer]];
                ctx.telegram.sendMessage(ctx.from.id, childData.answer);
            } else {
                ctx.telegram.sendMessage(ctx.from.id, 'no answer(');
            }
        });
    });


    // Logic end


});
