import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

import Routes from 'routes'
import StoreProvider from 'store/storeProvider'

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
