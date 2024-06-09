import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    console.log("REQUEST: /");
    res.send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
