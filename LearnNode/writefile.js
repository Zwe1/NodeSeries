'use strict';

var fs = require('fs');

var data = 'hello, Node.js';

fs.writeFile('output.php',data,function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('write file success !!!');
    }
});