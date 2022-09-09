const getActivity = () => {
    let uri = 'http://www.boredapi.com/api/activity?type=' + document.querySelector('#pet-select').value
    console.log(uri)
    fetch(uri)
        .then( response => response.json() )
        .then( json => {
            console.log(json)
            createCard(json)
        })
}

const createCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.accessibility
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)




    