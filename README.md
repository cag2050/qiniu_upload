# qiniu_demo

> A Vue.js project

需要修改的地方：    
1. 项目目录下 create_uptoken.js 文件。    
要修改：qiniu.conf.ACCESS_KEY、qiniu.conf.SECRET_KEY、bucket_name。
2. 修改 src/config/config.js 中的 bucket_name、domain、uptoken（ uptoken 是运行 create_uptoken.js，打印出的字符串。如果提示过期，重新获取并更改）。  

项目说明：  
1. src/components/Upload.vue 文件里引入了 node_modules 中安装的 qiniu-js：require('qiniu-js/dist/qiniu.js')  
2. 项目目录下 index.html 引入了 plupload：<script src="http://cdn.staticfile.org/plupload/2.1.9/plupload.full.min.js"></script>  
3. 断点续传的含义：配置项 chunk_size 值为0时表示不使用分片上传功能（分片上传功能实现了断点续传） 
4. src/components/El_upload.vue 是使用饿了么组件[el-upload](http://element.eleme.io/1.1/#/zh-CN/component/upload)，上传到七牛的例子。  
5. src/components/MultiUpload.vue 是包含子组件 src/components/Upload.vue 的父组件，可以创建多个Upload，Upload.vue是使用[官方js-sdk](https://github.com/qiniu/js-sdk/)方式上传。如果需要，可以在 Upload.vue 的 props 中再添加属性。
6. src/components/MultiFormData.vue 是包含子组件 src/components/FormData.vue 的父组件，可以创建多个FormData，FormData是使用[formdata表单](https://developer.qiniu.com/kodo/manual/1272/form-upload)的形式上传。如果需要，可以在 FormData.vue 的 props 中再添加属性。
7. 七牛使用 Formdata 方式上传，缺点：  
   1). IE 8/9 不支持。  
   2). 无法使用分片上传功能（分片上传功能实现了断点续传、暂停和继续）。  
   FormData.vue 和 El_upload.vue 都是使用了 Formdata 方式。  
   在不考虑兼容性和不需要分片上传的情况下，可以直接使用 Formdata 结合七牛表单上传的方式上传文件。  
   
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
