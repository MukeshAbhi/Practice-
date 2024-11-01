import { Hono } from 'hono'
import { userRoute } from './routes/user'

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user',userRoute);

export default app
