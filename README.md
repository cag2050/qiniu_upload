# qiniu_demo

> A Vue.js project

需要修改的地方：    
1. 项目目录下 create_uptoken.js 文件。    
要修改：qiniu.conf.ACCESS_KEY、qiniu.conf.SECRET_KEY、bucket。  
2. src/components/Upload.vue 文件。  
要修改 var uploader = Qiniu.uploader({ 里的：  
uptoken（运行 create_uptoken.js，打印出的字符串）、bucket_name、domain。  

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
