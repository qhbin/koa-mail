const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const routers = require('./router/index')

const app = new Koa();

app.use(bodyParser())

app.use(routers.routes()).use(routers.allowedMethods())


app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
