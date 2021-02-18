const request = require('request');

const fetchWeather = ( lat , lon , callback )=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=b0454e012af937ff05a6f276fa113017&query=' + lat + ',' + lon + '&units=m';

    request({ url : url, json: true }, (error, {body} )=> {
        if(error){
            callback('Unable to connect to the service provider', undefined )
        }else if(body.error){
            callback('Unable to fetch details, please try again', undefined)}
            else{
            callback(undefined, {
                name: body.location.name,
                country : body.location.country,
                region : body.location.region,
                temperature : body.current.temperature,
                description : body.current.weather_descriptions[0],
                feelslike : body.current.feelslike
            })
        }
})
}

module.exports = fetchWeather