const fs = require('fs')
//异步读取文件
// fs.readFile(
//     'D:\学习\企业项目开发方向班\前端\frontend-study\ES6\frontend-study\NodeJS\内置模块\test.txt',
//     'utf-8',
//     (err,data) => {
//         console.log('文件内容是',data )
//     })

//同步写入文件
// try{
//     let content = '新文件内容'
//     fs.writeFileSync(
//         'D:\学习\企业项目开发方向班\前端\frontend-study\ES6\frontend-study\NodeJS\内置模块\test.txt',
//         content
//     )
// }catch (err){
//     console.log(err)
// }


//检查文件状态
try{
    let status = fs.statSync(
        'D:\学习\企业项目开发方向班\前端\frontend-study\ES6\frontend-study\NodeJS\内置模块\test.txt',
    )
    console.log(status.isFile())
    console.log(status.isDirectory())
    console.log(status.size)
}catch(err){
    console.log(err)
}