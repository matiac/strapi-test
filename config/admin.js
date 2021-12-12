module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fe8725d3671205b57358c51508cda64'),
  },
});
