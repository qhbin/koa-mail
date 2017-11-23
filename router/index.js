const router = require('koa-router')()
const mail = require('./mail')

router.get('/', async ( ctx )=>{
  let html = `
	<h1>欢迎来到后台</h1>
  `
  ctx.body = html
})

router.use('/mail', mail.routes(), mail.allowedMethods())


module.exports = router