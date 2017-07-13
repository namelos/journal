import React from 'react'
import { Route, Link } from 'react-router-dom'

import { CounterApp } from './containers/CounterApp'

const Home = () => <div>Home</div>

export const App = () => <div>
  <ul>
    <li><Link to="/">Index</Link></li>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/counter">Counter</Link></li>
  </ul>

  <hr/>

  <Route path="/home" component={Home}/>
  <Route path="/counter" component={CounterApp}/>
</div>
