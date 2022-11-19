import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true*/ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import('../views/DataBinding/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import('../views/DataBinding/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import('../views/DataBinding/DataBindingInputText.vue')
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextArea',
    component: () => import('../views/DataBinding/DataBindingTextArea.vue')
  },
  {
    path: '/databindingselect',
    name: 'DataBindingselect',
    component: () => import('../views/DataBinding/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'databindingcheckbox',
    component: () => import('../views/DataBinding/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'databindingcheckbox2',
    component: () => import('../views/DataBinding/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'databindingradio',
    component: () => import('../views/DataBinding/DataBindingRadio.vue')
  },
  {
    path: '/databindingattribute',
    name: 'databindingattribute',
    component: () => import('../views/DataBinding/DataBindingAttribute.vue')
  },
  {
    path: '/databindingbutton',
    name: 'databindingbutton',
    component: () => import('../views/DataBinding/DataBindingButton.vue')
  },
  {
    path: '/databindingclass',
    name: 'databindingclass',
    component: () => import('../views/DataBinding/DataBindingClass.vue')
  },
  {
    path: '/databindingclass2',
    name: 'databindingclass2',
    component: () => import('../views/DataBinding/DataBindingClass2.vue')
  },
  {
    path: '/databindingstyle',
    name: 'databindingstyle',
    component: () => import('../views/DataBinding/DataBindingStyle.vue')
  },
  {
    path: '/databindingstyle2',
    name: 'databindingstyle2',
    component: () => import('../views/DataBinding/DataBindingStyle2.vue')
  },
  {
    path: '/databindinglist',
    name: 'databindinglist',
    component: () => import('../views/DataBinding/DataBindingList.vue')
  },
  {
    path: '/renderingvif',
    name: 'renderingvif',
    component: () => import('../views/Rendering/RenderingVIf.vue')
  },
  {
    path: '/eventclick',
    name: 'eventclick',
    component: () => import('../views/Event/EventClick.vue')
  },
  {
    path: '/eventchange',
    name: 'eventchange',
    component: () => import('../views/Event/EventChange.vue')
  },
  {
    path: '/computedexample',
    name: 'computedexample',
    component: () => import('../views/ComputedAndWatch/ComputedExample.vue')
  },
  {
    path: '/watchexample1',
    name: 'watchexample1',
    component: () => import('../views/ComputedAndWatch/WatchExample1.vue')
  },
  {
    path: '/watchexample2',
    name: 'watchexample2',
    component: () => import('../views/ComputedAndWatch/WatchExample2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
