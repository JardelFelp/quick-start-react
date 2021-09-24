import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from './store'

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={store.persist()}>
      {children}
    </PersistGate>
  </Provider>
)

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

export default StoreProvider
