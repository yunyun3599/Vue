# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 기본 예제 실습
```
- path: '/simpleexample'
- component: () => import ('../views/SelfPractice/SimpleExample.vue')  
```
```
- path: '/databinding'
- component: () => import('../views/DataBinding/DataBinding.vue')  
```
```
- path: '/databindinghtml'
- component: () => import('../views/DataBinding/DataBindingHtml.vue')  
```
```
- path: '/databindinginputtext'
- component: () => import('../views/DataBinding/DataBindingInputText.vue')  
```
```
- path: '/databindingtextarea'
- component: () => import('../views/DataBinding/DataBindingTextArea.vue')  
```
```
- path: '/databindingselect'
- component: () => import('../views/DataBinding/DataBindingSelect.vue')  
```
```
- path: '/databindingcheckbox'
- component: () => import('../views/DataBinding/DataBindingCheckbox.vue')  
```
```
- path: '/databindingcheckbox2' 
- component: () => import('../views/DataBinding/DataBindingCheckbox2.vue')  
```
```
- path: '/databindingradio'
- component: () => import('../views/DataBinding/DataBindingRadio.vue')  
```
```
- path: '/databindingattribute'
- component: () => import('../views/DataBinding/DataBindingAttribute.vue')  
```
```
- path: '/databindingbutton'
- component: () => import('../views/DataBinding/DataBindingButton.vue')  
```
```
- path: '/databindingclass'
- component: () => import('../views/DataBinding/DataBindingClass.vue')  
```
```
- path: '/databindingclass2'
- component: () => import('../views/DataBinding/DataBindingClass2.vue')  
```
```
- path: '/databindingstyle'
- component: () => import('../views/DataBinding/DataBindingStyle.vue')  
```
```
- path: '/databindingstyle2'
- component: () => import('../views/DataBinding/DataBindingStyle2.vue')  
```
```
- path: '/databindinglist'
- component: () => import('../views/DataBinding/DataBindingList.vue')  
```
```
- path: '/renderingvif'
- component: () => import('../views/Rendering/RenderingVIf.vue')  
```
```
- path: '/eventclick'
- component: () => import('../views/Event/EventClick.vue')  
```
```
- path: '/eventchange'
- component: () => import('../views/Event/EventChange.vue')  
```
```
- path: '/computedexample'
- component: () => import('../views/ComputedAndWatch/ComputedExample.vue')  
```
```
- path: '/watchexample1'
- component: () => import('../views/ComputedAndWatch/WatchExample1.vue')  
```
```
- path: '/watchexample2'
- component: () => import('../views/ComputedAndWatch/WatchExample2.vue')  
```
## 심화 실습
```
- path: '/wrapup'
- component: () => import('../views/SelfPractice/WrapUp.vue')  
```
## 서버 데이터 바인딩
```
- path: '/server-databinding'
- component: () => import('../views/ServerDataRendering/ServerDataBinding.vue')  
```

## 컴포넌트 심화
- /views/Chapter8_Component_Advance 에 위치
```
- path: '/nested-component',
- component: () => import('../views/Chapter8_Component_Advance/views/NestedComponent.vue')
```
```
- path: '/dynamic-props',
- component: () => import('../views/Chapter8_Component_Advance/views/DynamicDataProps.vue')
```
```
- path: '/slot-use',
- component: () => import('../views/Chapter8_Component_Advance/views/SlotUseLayout.vue')
```

## composition api, mixin, custom directives
```
- path: '/ch9',
- component: () => import('../views/chapter9_reusability_composition/ChapterNine.vue')
```

## vuex
```
- path: '/vuex',
- component: () => import('../views/chapter11_vuex/VuexComponent.vue')
```
