# SLACK Clone
# Install `bun` runtime
## Local setup
  ### Add `env` variables
```
DB_PASSWORD=mysql
DB_HOST=localhost
DB_USER=root
DB_DB=slack
GITHUB_ID=<your_github_id>
GITHUB_SECRET=<your_github_secret>
```
### At `src/db/config` create `config.json` file and add the commands
```
{
  "development": {
    "username": "root",
    "password": "mysql",
    "database": "slack",
    "host": "127.0.0.1",
    "dialect": "mysql"
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
```

### Install Dependencies
```
bun i
```
### Create Database
```
bunx sequelize db:create
```
### Add migrations
```
bunx sequelize db:migrate
```
# Docker setup