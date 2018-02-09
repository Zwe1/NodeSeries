'use strict';

var fs = require('fs');

fs.stat('samp.txt',function (err,stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile:' + stat.isFile());

        console.log('isDirectory:' + stat.isDirectory());

        if (stat.isFile()) {
            console.log('size:' + stat.size);
            console.log('birthtime:' + stat.birthtime);
            console.log('modified time:' + stat.mtime);
            console.dir('all stat:' + stat);
        }
    }
});