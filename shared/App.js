import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = () => <div>Home</div>

export const App = () => <div>
  <ul>
    <li><Link to="/">Index</Link></li>
    <li><Link to="/home">Home</Link></li>
  </ul>

  <hr/>

  <Route path="/home" component={Home}/>
</div>
