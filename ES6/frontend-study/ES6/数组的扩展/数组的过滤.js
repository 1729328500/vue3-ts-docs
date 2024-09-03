let arrs=[
    {name: 'aaa',color: 'd'},
    {name: 'bbb',color: 'f'},
    {name: 'ccc',color: 'd'},
    {name: 'eee',color: 'f'},
]

let result = arrs.filter((obj) => obj.color === "f")
console.log(result)
