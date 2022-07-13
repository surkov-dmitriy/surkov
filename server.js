import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import aboutRouter from './routes/pages/about.js';
import indexRouter from './routes/pages/index.js';
import projectsRouter from './routes/pages/projects.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'public')));
app.use('/views', express.static(path.resolve(__dirname, 'views')));
app.use('/pages', [indexRouter, aboutRouter, projectsRouter]);

app.get(['/', '/about', '/projects', '/projects/:id'], (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
