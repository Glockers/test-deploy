import express, { Application, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT = process.env.API_PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req: any, res: Response) => {
  return res.json('Express Typescript on Vercel' + process.env.API_PORT);
});

// app.use('/api/v1', routes);

try {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${process.env.API_HOST}:${PORT}`);
  });
} catch (ex) {
  console.error(ex);
}
