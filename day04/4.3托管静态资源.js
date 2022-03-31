//* express提供了一个函数：express.static
// * 可以方便的创建一个静态资源服务器

//? 通过下面的代码，可以把public文件夹下的所有静态资源，比如：css js 等对外开放
app.use(express.static("public"));

//!: 比如，可通过http://127.0.0.1/js 访问js文件
//!: 比如，可通过http://127.0.0.1/css 访问css文件
//!: 但是，public目录不会出现在url中
