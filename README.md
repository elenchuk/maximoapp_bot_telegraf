Node.js Telegraf.js project

This project can start some telegram bots, and provide answer for a questions from Firebase Database

Add environments.js file to src directory and insert data:
export const firebaseconfig, export const telegram_token

To build and run Telegram Bot:
npm start BOT_TOKEN='TELEGRAM_BOT_TOKEN'

To build and run at server continuously:
npm run server

To view list of run scripts continuously:
npm run serverlist

To stop run scripts continuously:
npm run serverstop ID
