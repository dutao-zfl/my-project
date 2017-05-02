import React from 'react';
import create from 'middle-core';
import App from "./containers/App";

const app = create({router:true});
app.start(App, '#app');
if(module.hot && process.env.NODE_ENV === 'dev'){
    module.hot.accept()
}