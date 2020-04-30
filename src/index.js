import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import { Provider } from 'react-redux'
import store from 'store'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()