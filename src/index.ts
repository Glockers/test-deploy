import express, { Application } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import routes from './api/routes';
import dbInit from './db/init';

dbInit();
const app: Application = express();
const PORT = process.env.API_PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.get('/', (req: any, res: any) => {
  res.send('test yraaaa');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${process.env.API_HOST}:${PORT}`);
});
