import React from 'react'
import { Switch, Route } from 'react-router-dom'
/* Pages */
import Home from 'pages/Home'
import About from 'pages/About'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export default () => (
  <Switch>
    {routes.map((item, index) => (
      <Route exact key={index} path={item.path} component={item.component} />
    ))}
  </Switch>
)
