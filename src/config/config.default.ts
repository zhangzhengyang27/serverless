export const orm = {
  type: 'mysql',
  // host: 'localhost',
  host:'121.40.77.89',
  port: 3306,
  username: 'root',
  password: 'Zhang@666',
  database: 'blog',
  synchronize: true,
  logging: false,
};
export const middleware = ['errorMiddleware'];
