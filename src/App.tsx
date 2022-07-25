import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
      <GlobalStyle />
    </Provider>
  )
}

export default App
