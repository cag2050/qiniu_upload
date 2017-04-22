import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MultiUpload from '../components/MultiUpload'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'MultiUpload',
          component: MultiUpload
      },
      {
          path: '/hello',
          name: 'Hello',
          component: Hello
      }
  ]
})
