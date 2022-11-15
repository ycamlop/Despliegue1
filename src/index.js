//console.log("Hello BOBO");
//const express = require('express');
import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT)
console.log('server running on port 3000', PORT)
