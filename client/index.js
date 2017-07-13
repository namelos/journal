import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { App } from '../shared/App'
import { counter } from '../shared/reducers/counter'

const preloadedState = window.__PRELOADED_STATE__

const store = createStore(counter, preloadedState)

const Root = () => <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</BrowserRouter>

render(<Root/>, document.querySelector('#app'))