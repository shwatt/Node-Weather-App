const request = require('request')

const forecast = (lat,long,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=15dd473bbe40ff1aaef2d2f187441b5d&query=' + lat + ',' + long + ''
    request({url, json:true}, (error, {body})=> {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.location.name === undefined){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature

            })

        }
    })
}

module.exports = forecast