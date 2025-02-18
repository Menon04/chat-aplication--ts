import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Chat API is running' });
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});