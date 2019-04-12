const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage
const Markup = require('telegraf/markup')
const WizardScene = require("telegraf/scenes/wizard");

const bot = new Telegraf('374400307:AAESYl39Ym3fmJN5ZibE2zFf1f0CEmdh9mA')

// Start Bot
bot.start(ctx => {
    ctx.reply(
        `How can I help you, ${ctx.from.first_name}?`
    );
});


// Currency converter Wizard
const currencyConverter = new WizardScene(
    "currency_converter",
    ctx => {
        ctx.reply("Please, type in the currency to convert from (example: USD)");
        console.log(ctx.wizard.state);
        return ctx.wizard.next();
    },
    ctx => {
        /*
        * ctx.wizard.state is the state management object which is persistent
        * throughout the wizard
        * we pass to it the previous user reply (supposed to be the source Currency )
        * which is retrieved through `ctx.message.text`
        */
        ctx.wizard.state.currencySource = ctx.message.text;
        ctx.reply(
            `Got it, you wish to convert from ${
                ctx.wizard.state.currencySource
                } to what currency? (example: EUR)`
        );
        console.log(ctx.wizard.state);
        // Go to the following scene
        return ctx.wizard.next();
    },
    ctx => {
        /*
        * we get currency to convert to from the last user's input
        * which is retrieved through `ctx.message.text`
        */

        ctx.wizard.state.currencyDestination = ctx.message.text;
        ctx.reply(
            `Enter the amount to convert from ${ctx.wizard.state.currencySource} to ${
                ctx.wizard.state.currencyDestination
                }`
        );
        console.log(ctx.wizard.state);
        return ctx.wizard.next();
    },
    ctx => {
        const amt = (ctx.wizard.state.amount = ctx.message.text);
        const source = ctx.wizard.state.currencySource;
        const dest = ctx.wizard.state.currencyDestination;

        console.log(ctx.wizard.state);

        ctx.reply('You enter: ' + dest + ',' + source + ',' + amt)
        return ctx.scene.leave();
    }
);

// Scene registration
const stage = new Stage([currencyConverter], { default: "currency_converter" });
bot.use(session());
bot.use(stage.middleware());

// Launch Telegraf bot
bot.launch();
