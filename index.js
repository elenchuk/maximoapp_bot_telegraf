const Telegraf = require('telegraf');
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('modern', ({ reply }) => reply('Yo'))
// bot.command('hipster', Telegraf.reply('λ'))
// bot.launch()

const keyboard = Markup.inlineKeyboard([
    Markup.callbackButton('Delete', 'delete')
]);



bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()


//sticker back
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()




// bot.hears('hi', ctx => {
//     return ctx.reply('Hey!');
// });
//
//
// bot.telegram.deleteWebhook()
//     .then( () => bot.startPolling() );
