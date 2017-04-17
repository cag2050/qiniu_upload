import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '../components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
      {
          path: '/upload',
          name: 'Upload',
          component: Upload
      }
  ]
})
