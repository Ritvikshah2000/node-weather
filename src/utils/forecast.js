const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3d75b4a5c6a427244c046c899fcd232d&query=' + latitude + ',' + longitude + '&units=m'
    request({url: url, json: true}, (error, {body} = {}) => { //if error, then response is empty & vice versa
        if (error){ //error handling
            callback('Unable to connect to weather service!', undefined)
        }else if (body.error) { //error from weather api
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently  " + body.current.temperature + " degrees celsius out ")
        }

})
}


module.exports = forecast