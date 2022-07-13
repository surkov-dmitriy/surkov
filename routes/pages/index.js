import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (_req, res) => {
  res.json({
    title: 'Home',
    text: ' Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.',
  });
});

export default indexRouter;
