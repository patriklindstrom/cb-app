const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack=require('webpack');
const webpackConfig = require('./node_modules/@vue/cli-service/webpack.config')
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(3003,()=>console.log('Listening'));
