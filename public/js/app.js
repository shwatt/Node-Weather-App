console.log('Client side javascript file is loaded!')

const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const message_one = document.querySelector('#message-1')
const message_two = document.querySelector('#message-2')

message_one.textContent=''



weather_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    message_one.textContent='Loading...'
    message_two.textContent=''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                message_one.textContent = data.error
            }
            else {
                message_one.textContent = data.location
                message_two.textContent = "The weather in " + data.location + " is " + data.weather + ". With a temperature of " + data.temperature + " degrees celsius."
            }
        })
    })
})