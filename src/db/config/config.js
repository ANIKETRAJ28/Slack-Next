"use-strict";

module.exports = {
  "development": {
    "username": "root",
    "password": "mysql",
    "database": "slack",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    "dialectModule": require("mysql2"),
    "benchmark": true
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