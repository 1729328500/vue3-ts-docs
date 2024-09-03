// let obj = {a:1 , b:2, c:3}
// let{a,b, ...other}=obj
// console.log(a)
// console.log(other)

let obj = { b:2, c:3}

// let(...copy) = obj
// console.log(copy)
//等同于
let copy = {...obj}
console.log(copy)