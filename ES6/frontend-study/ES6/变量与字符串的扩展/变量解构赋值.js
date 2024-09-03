// var foods = {
//     best: '小龙虾' ,
//     good: '火锅' ,
//     nomal: '快餐' ,
//     bad: '方便面' ,
// }

// var best=foods.best
// var bad=foods.bad


// var {best:best1,bad:bad1,hello} = foods
// console.log(best)
// console.log(bad)

const addres = {
     city:{
        name: 'njs' ,
        area:{
            name: 'qxq',
            school:{
                name:'ngy',
            },
        },
     },
}



let {
    city: {
        name: cityNAME,
        area: {
            name: areaNAME,
            school: {
                name: schoolNAME
            },
        },
    },
} = addres
console.log(cityNAME)
console.log(areaNAME)
console.log(schoolNAME)