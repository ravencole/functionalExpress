import open from 'open'
import colors from 'colors'
import express from 'express'

import startServer from './startServer'
import loadEnv from '../../tools/loadEnv'
import initializeRoutes from '../../routes'

process.env = loadEnv({
    node_env: process.env
})

const APP  = express(),
      PORT = process.env.PORT || 8000,
      HOST = process.env.HOST || 'localhost'

initializeRoutes()
    .map(_r => APP[ _r.verb ]( _r.path, _r.callback ))

APP.listen(PORT, startServer(PORT, HOST))