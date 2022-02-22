let currentPage = '#action'
let docRef
let myName = 'simon'
let localDoc
let dayName, weekNumber

const model = {
    'mandag':'neutral',
    'tirsdag':'neutral',
    'onsdag':'neutral',
    'torsdag':'neutral',
    'fredag':'neutral',
    'lørdag':'neutral',
    'søndag':'neutral'
}

function setup() {
    let dato = new Date().toDateString()
    weekNumber = getWeekNumber()
    dayName = new Date().toLocaleString("default", { weekday: "long" })
    select('#action-date').html('Uge ' + weekNumber + ' - ' + dato)
    docRef = db.collection('nudge-me').doc(myName)
    docRef.onSnapshot( doc => {
        console.log('receiving data')
        // console.log(doc.data())
        // console.log(doc.id)
        localDoc = doc.data()
        //tjek om denne uge er sat
        if(!localDoc.weeks['week-' + weekNumber]){
            console.log('updating week')
            localDoc.weeks['week-' + weekNumber] = model
            console.log(localDoc)
            docRef.update(localDoc)
        }
        if(localDoc.weeks['week-' + weekNumber][dayName] != 'neutral'){
            console.log('go overview')
            select('#overview-week').html('Uge ' + weekNumber)
            select('.overview-days').html('')
            const weekDays = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'].map( dag => {
                let div = createDiv(dag)
                    .addClass('overview-day')
                    .addClass(localDoc.weeks['week-' + weekNumber][dag])
                select('.overview-days').child(div)
            })
            shift('#overview')
        }else{
            shift('#action')
        }
    })
    //Sæt action for dag (action page)
    selectAll('.btn').map( btn => {
        btn.mousePressed( ()=>{ 
            console.log(btn.elt.id)
            if(btn.elt.id.includes('green'))localDoc.weeks['week-' + weekNumber][dayName] = 'green'
            if(btn.elt.id.includes('orange'))localDoc.weeks['week-' + weekNumber][dayName] = 'orange'
            if(btn.elt.id.includes('red'))localDoc.weeks['week-' + weekNumber][dayName] = 'red'
            docRef.update(localDoc)
        })
    })
}


//skifter sider ud fra et id 
function shift (newPage) {
    //currentpage har hele tiden klassen 'show' - nu fjerner vi den og giver den til 'newPage'
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}    

function getWeekNumber(){
    currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
    return result
}

function getData(collection, doc){
    db.collection(collection).doc(doc)
    .onSnapshot( doc => {
        console.log(doc.data())
    })
}

function addData(collection, doc, data){
    // Add a new document in collection "cities"
    db.collection(collection).doc(doc).set(data)
    .then(() => {
        console.log("Document successfully written!")
    })
    .catch((error) => {
        console.error("Error writing document: ", error)
    });
}


