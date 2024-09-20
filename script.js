const input = document.getElementById('input');
const button = document.getElementById('btn');
const cityNames = document.getElementById("city-name");
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const cityTimeZone = document.getElementById('city-timezone');

// Button loading effect
function setButtonLoading(isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.classList.add('button-loading');
        button.innerHTML = 'Fetching...';
    } else {
        button.disabled = false;
        button.classList.remove('button-loading');
        button.innerHTML = 'Search';
    }
}

async function getData(cityName){
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2b340cdd09b042b1b9a94825241909&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    
    // Start loading spinner
    setButtonLoading(true);
    
    try {
        const result = await getData(value);
        console.log(result);  // For debugging
        
        cityNames.innerHTML = `<span>City:</span> ${result.location.name}, ${result.location.region} - ${result.location.country}`;
        cityTime.innerHTML = `<span>Local Time:</span> ${result.location.localtime}`;
        cityTemp.innerHTML = `<span>Temperature (°C):</span> ${result.current.temp_c}`;
        cityTimeZone.innerHTML = `<span>Time Zone:</span> ${result.location.tz_id}`;
    } catch (error) {
        console.error("Error fetching weather data", error);
    } finally {
        // Stop loading spinner
        setButtonLoading(false);
    }
});









// const input = document.getElementById('input');
// const button = document.getElementById('btn');
// const cityNames = document.getElementById("city-name");
// const cityTime = document.getElementById('city-time');
// const cityTemp = document.getElementById('city-temp');
// const cityTimeZone = document.getElementById('city-timezone'); 


// async function getData(cityName){
//    const promise = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=2b340cdd09b042b1b9a94825241909&q=${cityName}&aqi=yes`
//     );
//     return await promise.json();
// }

// button.addEventListener("click", async () => {
//     const value = input.value;
//     const result = await getData(value);
//     console.log(result); // For debugging
//     cityNames.innerHTML = `<span>City:</span> ${result.location.name}, ${result.location.region} - ${result.location.country}`;
//     cityTime.innerHTML = `<span>Local Time:</span> ${result.location.localtime}`;
//     cityTemp.innerHTML = `<span>Temperature (°C):</span> ${result.current.temp_c}`;
//     cityTimeZone.innerHTML = `<span>Time Zone:</span> ${result.location.tz_id}`;
   
// });


