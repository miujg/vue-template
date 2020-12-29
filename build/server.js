const Koa = require('koa')
// const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const cors = require('koa2-cors')

// app.use(bodyParser())
app.use(koaBody({
  multipart: true
}))

app.use(
  async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    if(ctx.request.method == 'OPTIONS') {
      ctx.status = 204
      ctx.response.set('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE'])
      ctx.response.set('Access-Control-Allow-Headers', ['Content-Type', 'Accept'])
    }
    next()
  }
)

// 解决跨域问题
// app.use(cors({
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     // 允许接收cookie
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))

router.get('/', async (ctx) => {
  ctx.body = {
    name: 'jgmiu'
  }
})

router.post('/user', async (ctx) => {
  ctx.body = {
    mehod: 'post'
  }
})

router.put('/user', async (ctx) => {
  console.log(ctx)
  ctx.body = {
    method: 'put'
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log('serve start on 3000')
})
