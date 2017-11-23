const nodemailer = require('nodemailer')


async function sendMail() {
	let transporter = nodemailer.createTransport({
		host: 'smtp.qiye.163.com',
		port: 25,
		auth: {
			user: 'qiuhb@keyou.cn',
			pass: '7C3YQYa1GJu2fP7p' //授权码 

		}
	});
	let data = {
		from: 'qiuhb@keyou.cn', // 发送者  
		to: 'qiuhb@keyou.cn', // 接受者,可以同时发送多个,以逗号隔开  
		subject: 'union skv message', // 标题  
		html: `<h2>待处理工单:</h2><h3>  
   					  <a href="http://localhost:3000/mail/check">工单详情</a></h3>`
	};
	return new Promise((resolve, reject) => {
		transporter.sendMail(data, function(err, info) {
			if (err) {
				console.log(err);
				reject('发送失败')
			}
			resolve('发送成功')
		})
	})
}

module.exports = {
	async check(ctx) {
		ctx.body = 'check'
	},
	async send(ctx) {
		let result = await sendMail()
		ctx.body = result
	}
}