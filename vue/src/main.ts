import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const appKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ"

adrop.initialize(appKey)

app.mount('#app')
