const Telegraf = require('telegraf')
const five = require('johnny-five')

const bot = new Telegraf(process.env.TOKEN)
const board = new five.Board()

board.on('ready', function () {
	const led = new five.Led(13)

	bot.start(function (ctx) {
		ctx.reply('Welcome')
	})

	bot.hears('liga', function (ctx) {
		led.on()
	})

	bot.hears('desliga', function (ctx) {
		led.off()
	})

	bot.launch()
})