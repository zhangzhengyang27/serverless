export const orm = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'blog',
  synchronize: true,
  logging: false,
};
export const middleware = ['errorMiddleware'];
