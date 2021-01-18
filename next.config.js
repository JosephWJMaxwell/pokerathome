const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  env: {
    PUSHER_APP_ID: "1139842",
    PUSHER_APP_KEY: "80237f4b9125049feb3b",
    PUSHER_APP_SECRET: "360c3ba6dc9b39ae9945",
    PUSHER_APP_CLUSTER: "us2"
  }
};