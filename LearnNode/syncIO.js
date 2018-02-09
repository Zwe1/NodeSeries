'use strict';

var fs = require('fs');

try {
    var data = fs.readFileSync('samp.txt','utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}

console.log('同步IO读取文件！');