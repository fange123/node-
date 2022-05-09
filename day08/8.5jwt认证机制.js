//* 当前后端接口不存在跨域的时候，可以使用session认证机制（cookie不支持跨域，比较麻烦）

//* 当前后端存在跨域时，推荐用jwt认证机制

//# jwt:json web token  前端最流行的跨域认证解决方法

//# 工作原理：服务器将用户的信息加密成token字符串，然后响应给客户端，客户端拿到之后进行主动的保存（localStorage,sessionStorage...）
//# 之后需要身份认证的时候，客户端就通过authorization字段，将token发送给服务器，服务器将加密的字符串还原成用户信息

//todo jwt的组成

//* 三部分
//*Header 头部
//*Payload 有效荷载
//*Signature  签名
//? 三个使用逗号分隔
// # Header.Payload.Signature

//* header和signature是保证安全的
//* 加密完的内容时payload

//todo:使用方式
//+ 客户端接受到之后一般存储在localStorage或者sessionStorage中
//+客户端每次和服务端通讯都需要带上jwt字符串：推荐做法：把jwt放在http请求头的authorization字段中：
//# Authorization：Bearer <token>
