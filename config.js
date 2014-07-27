// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    config;

config = {

  production: {
    url: 'http:vAchieve.biz',
    mail: {
      transport: 'SMTP',
      host: 'smtp.mandrillapp.com',
      options: {
        service: 'Mandrill',
        auth: {
          user: process.env.MANDRILL_USERNAME,
          pass: process.env.MANDRILL_APIKEY
        }
      }
    },
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    }
  }

};

// Export config
module.exports = config;
