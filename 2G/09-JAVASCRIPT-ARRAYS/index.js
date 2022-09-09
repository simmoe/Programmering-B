let main = document.querySelector('main')
let input = document.querySelector('#input')



const addCard = (name, index) => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    newCard.style.animation= 'anim';
    newCard.style.animationDuration= '.3s';
    newCard.style.animationDelay= index/20 + 's';
    main.append(newCard)
}

addCard('Ib-Michael')

//vi vil gerne lave et array med tekst variabler
let names = ['andreas','theis', 'Frederik', 'mie', 'bjarke', 'bjørn', 'nagib', 'sofus', 'marius', 'emil' , 'simon-bimon']

names.push('Kong Christian')

names.map( name => addCard(name) )

input.addEventListener('input', ()=>{
    let results = names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()) )
    main.innerHTML = ''
    results.map( name => addCard(name) )
})









// her er et for loop 
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }