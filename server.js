const express = require('express');

const app = express();
if(process.env.NODE_ENV !=='production'){
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack=require('webpack');
    const webpackConfig = require('./node_modules/@vue/cli-service/webpack.config')
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
    app.use(express.static('dist'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'dist/index.html'))
    })
}
app.listen(3003,()=>console.log('Listening'));
