import { Sequelize } from 'sequelize';
import { db } from '@vercel/postgres';

export const sequelizeConnection = new Sequelize(process.env.POSTGRES_URL, {
  dialectModule: db
});
export async function checkDatabaseConnection() {
  try {
    await sequelizeConnection.sync({ force: true });
    await sequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
