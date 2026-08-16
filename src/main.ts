import './style.css'
import { startApp } from './ui.ts'

if (!window.location.hash) {
  window.location.hash = '#/'
}

startApp()
