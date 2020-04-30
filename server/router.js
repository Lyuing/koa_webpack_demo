const Router = require('koa-router');
const router = Router();
const mysql = require('./mysql/mysql');



// router.get('/favicon.ico', async (ctx, next)=>{
//   ctx.response.body = 
// })

router.post('/serch', async (ctx, next)=>{
  let {name} = ctx.request.body || {}
  let data = []
  if(name){
    data = await mysql.query(name)
  }
  ctx.response.body = {
    "code": 10,
    "data": data,
    "msg": 'ok'
  }
})

router.get('/', async (ctx, next)=>{
  ctx.response.body = JSON.stringify({data: `this is home`})
})


exports.router = router
// export default router
