import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MultiUpload from '../components/MultiUpload'
import MultiFormData from '../components/MultiFormData'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'MultiUpload',
          component: MultiUpload
      },
      {
          path: '/multiformdata',
          name: 'MultiFormData',
          component: MultiFormData
      },
      {
          path: '/hello',
          name: 'Hello',
          component: Hello
      }
  ]
})
