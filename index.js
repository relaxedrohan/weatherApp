 const request = require('request');
 const geocode = require('./utils/geocode');
 const fetchWeather = require('./utils/fetchWeather')


const address = process.argv[2];

if(!address){
    console.log('Unable to fetch address')
}else{

geocode( address ,(error,data)=>{
    if(error){
        return console.log(error)
    }
    
    fetchWeather( data.lat , data.lon, (error,weatherData)=>{

        if(error){
            return console.log(error)
        }

        console.log(weatherData)
    })
})
}




