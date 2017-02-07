export default {
  environment: process.env.NODE_ENV || 'development',
  virtualHost: process.env.VIRTUAL_HOST,
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT || '3000',
  },
  db: {
    host: process.env.DB_HOST || '192.168.99.100',
    port: process.env.DB_PORT || '27017',
    timeout: process.env.DB_TIMEOUT || 30000,
    database: process.env.DB_DATABASE || 'local',
  },
};
