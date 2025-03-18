
async function gettingAPI(location) {
    let somevalue = formatter(location);
    console.log(somevalue);
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${somevalue}/?key=27LTJ9KQX9ACRMSBJZKETRUXM`, {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData.days[0].conditions);
    console.log(weatherData);
    
    let showData = listDates(weatherData, location);
    createHTMLFrontend(showData);
    console.log(`Today is ${showData.date}. The temperature is ${showData.temperature} and it is ${showData.conditions}`);
}

function createHTMLFrontend(somedata) {
    let container = document.querySelector("#container");
    const box = document.createElement("div");
    const location = document.createElement("div")
    const temperature = document.createElement("div")
    temperature.setAttribute('id', 'temp');
    const condition = document.createElement("div")
    condition.setAttribute('id', 'condition');
    const date = document.createElement('div')
    date.setAttribute('id', 'currentdate');

    //start with location on top
    //then the date
    //then the image
    //then the temperature
    //then the condition
    
    box.setAttribute('id', 'weatherbox');
    box.style.height = '300px';
    box.style.width = '250px';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.justifyContent = 'center';
    box.style.alignContent = 'center';
    box.style.backgroundColor = 'skyblue';
    location.setAttribute('id', 'pos');

    location.style.display = 'flex';
    location.style.justifyContent = 'center';
    
    date.style.display = 'flex';
    date.style.justifyContent = 'center';

    temperature.style.display = 'flex';
    temperature.style.justifyContent = 'center';

    condition.style.display = 'flex';
    condition.style.justifyContent = 'center';

    console.log(box);

    console.log(location);
    location.style.fontSize = '15px';
    date.style.fontSize = '15px';
    //image placeholder
    temperature.style.fontSize = '20px';
    condition.style.fontSize = '15px';

    location.textContent = somedata.location;
    date.textContent = somedata.date;
    temperature.textContent = somedata.temperature;
    condition.textContent = somedata.conditions;

    container.append(box);
    box.append(location);
    box.append(date);
    //image placeholder
    box.append(temperature);
    box.append(condition);

}

function formatter(text) {
    console.log(text);
    return text.replace(" ", "").toLowerCase();
}

function listDates(data, loc) {
    const info = {};

    info.date = data.days[0].datetime;
    info.temperature = data.days[0].temp;
    info.conditions = data.days[0].conditions;
    info.location = loc;
    
    return info;

}

export { gettingAPI };