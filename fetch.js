//let url = 'https://api.wheretheiss.at/v1/satellites/25544'     // for using "Where the ISS at" API for github.
//let apiDescription = "Where the ISS at"                        // for using "Where the ISS at" API for github.
let url = 'http://api.open-notify.org/iss-now.json'
let apiDescription = "OPEN NOTIFY"


let updatePeriodLabel = document.getElementById('updatePeriodLabel')
let apiLabel = document.getElementById('apiLabel')
let updateTimeLabel = document.getElementById('updateTimeLabel')
let issLat = document.getElementById('iss-lat')
let issLon = document.getElementById('iss-lon')

var issMarker
const updatePeriod = 10000   // in milliseconds.

updatePeriodLabel.innerHTML = (updatePeriod/1000)
apiLabel.innerHTML = apiDescription

let issIcon = L.icon({
    iconUrl: 'space-station.png',
    iconSize:  [32,32],
    iconAnchor: [16,16],
    popupAnchor: [0,0]
})

let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0dGhld2N1cnJhbiIsImEiOiJjanM1YXhramswZHcxNDRueWcwYWxuZmtpIn0.z3GWbZ3PKqAFJxOpBEHWlg',
    {
        // Attribution copy+pasted from leafletjs.com/examples/quickstart:
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 7,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWF0dGhld2N1cnJhbiIsImEiOiJjanM1YXhramswZHcxNDRueWcwYWxuZmtpIn0.z3GWbZ3PKqAFJxOpBEHWlg'
    }).addTo(map)

const maxFailedAttempts = 3
updateIss(maxFailedAttempts)
//setInterval(updateIss, updatePeriod)

function updateIss(attemptsRemaining) {
    if (attemptsRemaining <= 0) {
        console.log("Too many failed requests, abandoning requests to ISS API.")
        return
    }

    fetch(url)
        .then( res => res.json() )
        .then( issData => {
            console.log(issData)
            //let lat = issData.latitude    // for using "Where the ISS at" API for github.
            //let lon = issData.longitude   // for using "Where the ISS at" API for github.
            let lat = issData.iss_position.latitude
            let lon =issData.iss_position.longitude

            issLat.innerHTML = lat
            issLon.innerHTML = lon
            let issCoords = [lat, lon]
            let issTimeStamp = issData.timestamp
            let localTime = new Date(issTimeStamp * 1000)
            console.log(issTimeStamp)
            console.log("local time:  " + localTime)
            updateTimeLabel.innerHTML = localTime

            let issMarker = L.marker(issCoords, {icon: issIcon}).addTo(map)
        })
        .catch( err => {
            attemptsRemaining--
            console.log(err)
        })
        .finally( () => {
            setTimeout(updateIss, updatePeriod, attemptsRemaining)
        })
}



