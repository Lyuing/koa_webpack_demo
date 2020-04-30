###  请求数据获取
#### get
##### 获取GET请求数据有两个途径
* 从上下文中直接获取
  * 请求对象 `ctx.query`，返回如 `{ a:1, b:2 }`
  * 请求字符串 `ctx.querystring`，返回如 `a=1&b=2`
* 从上下文的 `request` 对象中获取  
  * 请求对象 `ctx.request.query`，返回如 `{ a:1, b:2 }`
  * 请求字符串 `ctx.request.querystring`，返回如 `a=1&b=2`

#### post
* Koa2 没有封装获取 POST 参数的方法,需要通过解析上下文 `context` 中的原生 node.js 请求对象 req
> `ctx.request` 是 context 经过封装的请求对象，ctx.req 是 context 提供的 node.js 原生HTTP请求对象  
* 对于POST请求的处理， 通常借用 `koa-bodyparser` 中间件来解析
> npm i -S koa-bodyparser  
``` 
router.post('/serch', async (ctx, next)=>{
  // ctx.request 本身没有 body 属性，
  // koa-bodyparser 解析后提供给ctx.request
  let {text} = ctx.request.body || {}
  let data = null

  if(text){
    data = await mysql.query(text)
  }

  ctx.response.body = {
    "code": 10,
    "data": data,
    "msg": 'ok'
  }
})
```


### 静态资源服务器  
##### 使用 koa-static  
基于 koa 开发的 web应用，我们一般使用 koa-static  
> npm i -S koa-static
```
const static = require('koa-static')

... 

// 静态资源目录 相对入口文件server.js 的相对路径
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))

```