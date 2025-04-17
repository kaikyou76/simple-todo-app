import { Hono } from 'hono'

import type { D1Database } from '@cloudflare/workers-types';

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{Bindings:Bindings}>();

// CORS ミドルウェア（オプション対応含む）
app.use('*', async (c, next) => {//app.use('*')すべてのルート（*）でこのミドルウェアを適用
	if (c.req.method === 'OPTIONS') {
		return c.newResponse('', {
		  status: 204,
		  headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		  },
		})
	  }
  await next()
  c.header('Access-Control-Allow-Origin', '*')
})

app.get('/api/todos', async (c) => {
	try {
	  const { results } = await c.env.DB.prepare('SELECT * FROM todos').all()
	  return c.json(results)
	} catch (error) {
	  console.error('Error fetching todos:', error)
	  return c.json({ error: 'サーバーエラーが発生しました' }, 500)
	}
  })

export default app
  