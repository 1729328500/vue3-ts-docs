// //浅拷贝
// let a = {name: 'hd'}
// let b = a
// b.name = "qd"
// console.log(a)
// console.log(b)

//深拷贝
let obj = {
    name: 'dy',
    category: {
        cartoon: 'dm',
        kunfu: 'gf',
        love: 'aq',
    },
    platfrom: ['tx', 'aqy', 'yk'],
}
let obj2 =JSON.parse(JSON.stringify(obj))
obj2.category.kunfu = 'xx' 
obj2.platfrom[2] = 'bilibili'
console.log(obj.category.kunfu,obj.platfrom[2])
console.log(obj2.category.kunfu,obj2.platfrom[2])

