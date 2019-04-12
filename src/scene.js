const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const WizardScene = require('telegraf/scenes/wizard')

const superWizard = new WizardScene('super-wizard',
    (ctx) => {
        ctx.reply('Step 1')
        return ctx.wizard.next()
    },
    (ctx) => {
        ctx.reply('Done')
        return ctx.scene.leave()
    }
)

const bot = new Telegraf('374400307:AAESYl39Ym3fmJN5ZibE2zFf1f0CEmdh9mA')
const stage = new Stage([superWizard])
bot.use(session())
bot.use(stage.middleware())
bot.hears('foo', Stage.enter('super-wizard'));
bot.launch()
