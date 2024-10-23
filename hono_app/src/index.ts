import { Hono } from 'hono'

const app = new Hono(
  {
    
  }
)

app.get('/hello', (c) => {
  return c.json({message:'Hello World!'})
})

export default { 
  port: 4000, 
  fetch: app.fetch, 
} 
