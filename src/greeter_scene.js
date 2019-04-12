const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage
const Markup = require('telegraf/markup')

const bot = new Telegraf('374400307:AAESYl39Ym3fmJN5ZibE2zFf1f0CEmdh9mA')

// Greeter scene
const greeter = new Scene('greeter')
greeter.enter((ctx) => ctx.reply('Hi'))
greeter.leave((ctx) => ctx.reply('Bye'))
greeter.hears('hi', leave())
greeter.on('message', (ctx) => ctx.reply('Send `hi`'))

// Create scene manager
const stage = new Stage()
stage.command('cancel', leave())

// Scene registration
stage.register(greeter)



bot.start((ctx => {
    ctx.reply(
        `How can I help you, ${ctx.from.first_name}?`,
        Markup.inlineKeyboard([
            Markup.callbackButton("Поздороваться", "greeter")
        ]).extra()
    );
}))



bot.use(session())
bot.use(stage.middleware())
bot.action('greeter', (ctx) => ctx.scene.enter('greeter'))

bot.launch();
