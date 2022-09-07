import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { reduxStore } from './Store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </Provider>,
)

reportWebVitals()
