var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  SERVER_SETUP_API_ENDPOINT:  '"http://192.168.0.5:3000/api/v1/server_setup"',
  FIRMWARES_API_ENDPOINT:     '"http://192.168.0.5:3000/api/v1/firmwares"',
  STATS_API_ENDPOINT:         '"http://192.168.0.5:3000/api/v1/stats"',
  BTC_WALLET_ADDRESS:         '"0123456789012345678901234567890123"'
})
