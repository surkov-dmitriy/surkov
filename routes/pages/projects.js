import { Router } from 'express';
import { getData } from '../../controllers/projects.controllers.js';

const projectsRouter = Router();

projectsRouter.get('/projects', (_req, res) => {
  const data = getData();

  res.json({
    title: JSON.parse(data).title,
    list: JSON.parse(data).list,
  });
});

export default projectsRouter;
