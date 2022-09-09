
let bingelist = [
    './assets/film/1.png',
    './assets/film/2.png',
    './assets/film/3.png',
    './assets/film/4.png',
    './assets/film/5.png',
    './assets/film/6.png',
    './assets/film/7.png',
    './assets/film/8.png',
]

bingelist.map( (movie, index) => {
    let newImage = document.createElement('img')
    newImage.src = movie
    document.querySelector('#bingelist').append(newImage)
})

document.querySelector('#arrow').addEventListener('click', ()=>{
    document.querySelector('#bingelist').scrollBy(600, 0)
})

