'use strict';

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

//默认根路径为当前目录
console.log('argv:' + process.argv);
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:' + root);

var server = http.createServer(function (request, response) {
    try {
        console.log('url:' + url.parse(request.url));
        // 获取url的path
        var pathName = url.parse(request.url).pathname;
        //获取本地文件路径
        var filePath = path.join(root, pathName);
        //获取文件状态
        fs.stat(filePath, function (err, stats) {
            if (!err && stats.isFile()) {
                //未出错并且文件存在
                console.log('200 ' + request.url);
                //发送响应头，设置为200，请求成功
                response.writeHead(200);
                //将文件流复制到response中,respnse为writable stream
                fs.createReadStream(filePath).pipe(response);
            } else {
                //文件不存在
                console.log('404' + response.url);
                //发送响应头
                response.writeHead('404');
                response.end('404 Not Found');
            }
        });
    } catch (err) {
        console.log('catch error:' + err);
    }
});

server.listen(8099);

console.log('Server is running at http://127.0.0.1:8099/');