
fetch('./kalender.json')
    .then( res => res.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date

            //tilføj animation når der klikkes på lågen
            lock.addEventListener('click', ()=>{
                lock.innerHTML = ''
                switch(door.animation){
                    case 'slide':
                        lock.classList.add('openSlide')
                        break;
                }
            })

            //sæt billede og andet indhold ind jvf JSON dokumentet
            switch(door.content){
                case 'image': 
                setImage(div, door)
                break
                case 'youtube':
                    setYoutube(div, door)
                    break
                    default:
                        break
                    }
                    
            //læg tekst på lågen hvis der står noget i JSON
            if(door.text){
                let textElement = document.createElement('p')
                textElement.innerHTML = door.text
                div.append(textElement)
            } 

            div.append(lock)
            document.querySelector('main').append(div)
        })
    })


const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}
const setYoutube = (div, obj) => {
    div.innerHTML = obj.embed
}
const setBoredApi = (div, obj) => {

}