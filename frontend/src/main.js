import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'
import './styles/style.css'
import './styles/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true
})
// app.use(Vue3Toastify, { autoClose: 3000 }) 
app.mount('#app')
