import Vue from 'vue'
import Router from 'vue-router'
import AllFamilies from './views/AllFamilies.vue'
import MyFamily from './views/MyFamily.vue'
import ManageFamilies from './views/ManageFamilies.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/myfamily',
      name: 'myfamily',
      component: MyFamily
    },
    {
      path: '/allfamilies',
      name: 'allfamilies',
      component: AllFamilies
    },
    {
      path: '/managefamilies',
      name: 'managefamilies',
      component: ManageFamilies
    }
  ]
})
