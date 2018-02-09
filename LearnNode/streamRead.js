'use strict';

var fs = require('fs');

var rs = fs.createReadStream('samp.txt','utf-8');

rs.on('data',function (chunk) {
    console.log('DATA:');
    console.log(chunk);
});

rs.on('end',function (haveparam) {
    //检验是否有可获取的数据
    console.log('END:',haveparam);
});

rs.on('error',function (err) {
    console.log('Error:' + err);
});