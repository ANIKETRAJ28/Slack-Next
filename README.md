# SLACK Clone
# Install `bun` runtime
## Local setup
  ### Add `env` variables
```
DB_SYNC=true
NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET=<next_secret>
GITHUB_ID=<github_id>
GITHUB_SECRET=<github_secret>
```
### At `src/db/config` create `config.js` file and add the commands
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

## At `src/db` run command

### Create Database
```
bunx sequelize db:create
```
### Add migrations
```
bunx sequelize db:migrate
```
# Docker setup