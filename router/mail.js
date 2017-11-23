const router = require('koa-router')()
const mailController = require('./../controllers/mail')


router.get('/check',mailController.check)
router.get('/send',mailController.send)


module.exports = router
