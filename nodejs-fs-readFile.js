var fs = require("fs");

fs.readFile('readme.md', 'utf-8', function (err ,data) {
    if(err){
        console.log('啊哦~ 出错了');
    } else {
        console.warn('>>>>>>>>>>读取文件成功!!! 以下是正文内容↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n');
        console.warn(data);
        console.warn('\n<<<<<<<<<<读取文件成功!!! 以上是正文内容↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑');
    }
});

console.log("-------------------------------------------------READ FILE ASYNC END");