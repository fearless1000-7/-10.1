let user = {
    name: 'Bekzod',
    surname: 'Babakhodjaev',
    birhtday: 2006,
    age: 16,
    isMarried: false,
}
let Info = {
    hairColor: 'black',
    height: 176,
    arrid: [],
    money: 1000000,
    width: NaN,
    wife: undefined
}



let value = Object.values(user)
console.log(user)

let entries = Object.entries(user)
console.log(entries);
let objAll = Object.assign(user, Info)
let values = Object.values(objAll)

let number = []
let boolean = []
let string = []
let object = []


values.filter(item => {
    if(typeof(item) == 'number') {
        number.push(item)
    } else if(typeof(item) === 'string') {
        string.push(item)
    } else if (typeof(item) === 'object') {
        object.push(item)
    } else if(typeof(item) === 'boolean') {
        boolean.push(item)
    }
})
console.log('number', number.length, 'boolean',boolean.length, 'string',string.length, 'object',object.length, );