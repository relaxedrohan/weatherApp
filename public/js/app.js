console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location ).then((res)=>{
        if(res.error){
            messageOne.textContent = res.error
        }else{
            res.json().then((data)=>{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
        }
    )
}}
    
)})