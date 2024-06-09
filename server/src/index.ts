import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
