import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './state'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
