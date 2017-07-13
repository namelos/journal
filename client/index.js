import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Home = () => <div>Home</div>

const App = () => <BrowserRouter>
  <div>
    <ul>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>

    <hr/>

    <Route path="/home" component={Home}/>
  </div>
</BrowserRouter>

render(<App/>, document.querySelector('#app'))