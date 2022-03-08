module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'going2',
      password : 'ch@llenge',
      database : 'going2_challenge'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  }
}