const express = require('express');

const app = express();
app.get('/hello'),(req,res)=> res.send({cm:'What superpower would you prefer, flight or invisiblity?'})
app.get('/api'),(req,res)=> res.send({link:'./apidocumentation'})

if(process.env.NODE_ENV !=='production'){
    console.log('We are in development mode')
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack=require('webpack');
    const webpackConfig = require('./node_modules/@vue/cli-service/webpack.config')
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
    console.log('We are in production mode')
    app.use(express.static('dist'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'dist/index.html'))
    })
}
app.listen(process.env.PORT || 3003,()=>console.log('Listening'));
