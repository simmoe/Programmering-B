let person = {
    id: '12345',
    name: 'Mie', 
    age: 17,
    hobbies:['code', 'cubing', 'gaming', 'hair-stuff'],
    favoriteColor: 'hotpink'
}

console.log ( ' this persons name is ' + person.name )
console.log ( ' this persons id is ' + person.id )
console.log ( ' this persons age is ' + person.age )
console.log ( ' this persons first hobby is ' + person.hobbies[0] )

let people = [ person, {
    name: 'peter',
    age:12,
    id:'23456',
    hobbies:['running', 'sleeping', 'waterdrinking', 'dancing'],
    favoriteColor:'green'
},{
    name:'hessan',
    age:44,
    id:'34567',
    hobbies:['longing', 'crying', 'romantic movies'],
    favoriteColor: 'blue'
},{
    name:'mille',
    age:98,
    id:'45678',
    hobbies:['tv'],
    favoriteColor:'purple'
}

]

console.log(' person 2s name is ' + people[2].name)

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>age: ' + person.age + '</li>'
    nc.innerHTML += '<li>id: ' + person.id + '</li>'
    nc.innerHTML += '<li>hobbies: ' + person.hobbies.join(' ,') + '</li>'
    document.querySelector('main').append(nc)
})