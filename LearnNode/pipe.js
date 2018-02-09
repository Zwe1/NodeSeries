'use strict';

var fs = require('fs');

var rs = fs.createReadStream('samp.txt');
var ws = fs.createWriteStream('pipeCopy.txt');
rs.pipe(ws);