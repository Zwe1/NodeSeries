'use strict';

var fs = require('fs');

try {
    var wf = fs.createWriteStream('streamWrote1.txt', 'utf-8');

    wf.write('使用node内置的fs模块中stream来流写入数据文件\n');
    wf.write('End.');
    wf.end();

    var wf2 = fs.createWriteStream('streamWrote2.txt', 'utf-8');

    wf2.write(new Buffer('使用stream写入二进制文件！\n', 'utf-8'));
    wf2.write(new Buffer('End.', 'utf-8'));
    wf2.end();
} catch (err) {
    console.log('err:',err);
} 
