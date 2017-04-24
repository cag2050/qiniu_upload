import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MultiUpload from '../components/MultiUpload'
import FormData from '../components/FormData'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'MultiUpload',
          component: MultiUpload
      },
      {
          path: '/formdata',
          name: 'FormData',
          component: FormData
      },
      {
          path: '/hello',
          name: 'Hello',
          component: Hello
      }
  ]
})
