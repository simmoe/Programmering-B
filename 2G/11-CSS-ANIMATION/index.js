
for(let i = 0; i<20; i++){
    let card = document.createElement('div')
    card.classList.add('card')
    card.style.animation = 'anim'
    card.style.animationDelay = i/40 + 's'
    card.style.animationDuration = '.3s'
    document.querySelector('main').append(card)
}

