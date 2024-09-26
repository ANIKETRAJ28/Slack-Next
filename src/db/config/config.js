"use-strict";

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DB,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "dialectModule": require("mysql2"),
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}