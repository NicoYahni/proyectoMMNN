module.exports = {
  "development": {
    "username": "root",                 //nombre de la base de datos//
    "password": null,                   //contrasena de base de datos//
    "database": "database_development", //nombre de la base de datos//
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
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
