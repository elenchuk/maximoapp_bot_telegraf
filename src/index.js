// Import environments
import {firebaseconfig} from './environments';
import {telegram_token} from "./environments";

// Require Telefraf libraries
const Telegraf = require('telegraf');
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Markup = require('telegraf/markup')
const WizardScene = require('telegraf/scenes/wizard')


// create new Telefram bot class with token
const bot = new Telegraf(telegram_token);

// Add additional services that you want to use
require("firebase/database");

// Firebase App is always required and must be first
let firebase = require("firebase/app");

// Firebase initialize config
firebase.initializeApp(firebaseconfig);

// All db
let db = firebase.database().ref();

// Answer table
let questions = db.child('aq_db/');

// Users table
let users = db.child('users/');

// Add user info data on start command
bot.start((ctx) => {

    // Start message
    ctx.reply('Hello, ' + ctx.message.from.first_name)

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

bot.command('creatematch', (ctx) => {
    ctx.reply("Выберите действие.", Markup.inlineKeyboard([
        Markup.callbackButton("Список доступных матчей", "groups"),
        Markup.callbackButton("Создать новый матч", "create")
    ]).extra());
});
bot.action("create", (ctx) => {
    console.log('create');
    // ctx.scene.enter("create")
});

// Create Wizard





// Users questions and answers
bot.on('message', (ctx) => {

    //firebase search
    questions.orderByChild("question").equalTo(ctx.message.text).on('value', function (snapshot) {

        // Random answer
        var rand_answer = Math.floor(Math.random()*(snapshot.numChildren()));
        var childData = snapshot.val()[Object.keys(snapshot.val())[rand_answer]];
        ctx.telegram.sendMessage(ctx.from.id, childData.answer);

        // Search by one value
        // snapshot.forEach(function(childSnapshot) {
        //
        //     var key = childSnapshot.key;
        //     var childData = childSnapshot.val();
        //     ctx.telegram.sendMessage(ctx.from.id, childData.answer);
        //
        // });
    });
});



// Launch Telegraf bot
bot.launch();
