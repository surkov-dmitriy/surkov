import { Router } from 'express';

const aboutRouter = Router();

aboutRouter.get('/about', (_req, res) => {
  res.json({
    title: 'About',
    text: 'About me',
  });
});

export default aboutRouter;