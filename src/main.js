import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

const app = createApp(App)
app.use(router)
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
app.mixin(mixins)
app.use(store)
app.mount('#app')
