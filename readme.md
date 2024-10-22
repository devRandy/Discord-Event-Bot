# The Church of Goof Discord Bot
A bot for the Church of Goof Discord server.

## Install
Requires Minumum node version 18

1. Run `npm install`

## Run
1. Run `node .`

## Images Script

To perform a scrape of the card images, you can utilize the get-images.js to scrape the URL and download to your
local repo.

Run `npm run images`

## Database Setup

Event-Bot utilizes sqlite, which is a file-based relational database management system. To setup the database locally, please follow the steps outlined below:

1. Run `npm run db:init` - this intializes the tables, and populates them based on what in in the database-init.js