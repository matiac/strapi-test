module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "jam_test"),
      user: env("DATABASE_USERNAME", "jaman"),
      password: env("DATABASE_PASSWORD", "8#75HzI0cOH--GP&"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
