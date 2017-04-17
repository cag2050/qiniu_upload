<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    路由列表：<br/>
    <router-link to='/'>home</router-link><br/>
    <router-link to='/upload'>七牛文件上传upload</router-link><br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
