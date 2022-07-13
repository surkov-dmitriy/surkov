import fs from 'fs';

export const getData = () => {
  const filePath = `./models/projects.models.json`;
  const obj = fs.readFileSync(filePath, 'utf8');
  return obj;
} 