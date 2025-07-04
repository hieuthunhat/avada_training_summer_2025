import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import { router } from './routes/routes.js';

const PORT = '3001'
const app = new Koa();

app.use(cors({
  origin: 'http://localhost:3000', // Hoặc chỉ định domain cụ thể như 'http://localhost:3000'
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization']
}));
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
