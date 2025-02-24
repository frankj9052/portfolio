import { app } from './app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const start = async () => {
  console.log('server is starting ...');
}

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

start();
