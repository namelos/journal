import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'
import path from 'path'

const app = express()

app.use(webpackMiddleware(webpack(config), {
  publicPath: config.output.publicPath
}))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err => console.log(err || 'Listening at 3000.'))
