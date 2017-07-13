import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { App } from '../shared/App'

const app = express()

app.use(webpackMiddleware(webpack(config), {
  publicPath: config.output.publicPath
}))

app.get('/*', (req, res) => {
  const context = {}

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.redirect(context.url)
  } else {
    res.send(`
    <!doctype html>
    <body>
      <div id="app">${html}</div>
      <script src="static/bundle.js"></script>
    </body>
    `)
  }
})

app.listen(3000, err => console.log(err || 'Listening at 3000.'))
