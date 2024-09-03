let arrs=[
    {name: 'aaa',color: 'd'},
    {name: 'bbb',color: 'f'},
    {name: 'ccc',color: 'd'},
    {name: 'eee',color: 'h'},
]

let row = arrs.find((row) => row.color === 'd')
console.log(row)

let obj= arrs.findLast((obj) => obj.color === 'd')
console.log(obj)


