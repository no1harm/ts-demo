#!/usr/bin/env ts-node
// process 可以读取用户输给文件的额外的参数
let a:number = parseInt(process.argv[2])  // '1'
let b:number = parseInt(process.argv[3])   // '2'
console.log(a+b)    