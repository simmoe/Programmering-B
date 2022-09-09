let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


const time = () => {
    let date = new Date()

    let t = ''
    if(date.getHours() < 10) t = '0'
    hours.innerHTML = t + date.getHours()
    hours.style.width = 100/24 * date.getHours() + 1 + '%'
    
    t = ''
    if(date.getMinutes() < 10) t = '0'
    minutes.style.width = 100/60 * date.getMinutes() + 1 + '%'
    minutes.innerHTML = t + date.getMinutes()
    
    t = ''
    if(date.getSeconds() < 10) t = '0'
    seconds.style.width = 100/60 * date.getSeconds() + 1 + '%'
    seconds.innerHTML = t + date.getSeconds() 
}

let timer = setInterval(time, 1000)

