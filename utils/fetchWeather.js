const request = require('request');

const fetchWeather = ( lat , lon , callback )=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=b0454e012af937ff05a6f276fa113017&query=' + lat + ',' + lon + '&units=m';

    request({ url, json: true }, (error, {body} )=> {
        if(error){
            callback('Unable to connect to the service provider', undefined )
        }else if(body.error){
            callback('Unable to fetch details, please try again', undefined)}
            else{
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree out. There is a ' + body.current.precip + '% chance of rain.')
        }
})
}

module.exports = fetchWeather