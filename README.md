Node.js Telegraf.js project

This project can launch several telegram bots and give answers to questions from the Firebase database that were submitted there through the Angular application.

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
