import config from '../../config.js';


export default {
  "development": {
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbName,
    "host": config.dbHost,
    "dialect": "postgres"
  },
  "test": {
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbName,
    "host": config.dbHost,
    "dialect": "mockedString"
  },
  "production": {
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbName,
    "host": config.dbHost,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        rejectUnauthorized: false
      }
    }
  }
}
