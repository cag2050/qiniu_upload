# qiniu_demo

> A Vue.js project

需要修改的地方：    
1. 项目目录下 create_uptoken.js 文件。    
要修改：qiniu.conf.ACCESS_KEY、qiniu.conf.SECRET_KEY、bucket。  
2. src/components/Upload.vue 文件。  
要修改 var uploader = Qiniu.uploader({ 里的：  
uptoken（运行 create_uptoken.js，打印出的字符串。如果提示过期，重新获取并更改）、bucket_name、domain。

项目说明：  
1. src/components/Upload.vue 文件里引入：require('qiniu-js/dist/qiniu.js')  
2. 项目目录下index.html 引入plupload：<script src="http://cdn.staticfile.org/plupload/2.1.9/plupload.full.min.js"></script>  

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
