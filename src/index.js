
async function gettingAPI() {
    let response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/newyork/?key=27LTJ9KQX9ACRMSBJZKETRUXM', {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData.days[0].conditions);
}

gettingAPI();