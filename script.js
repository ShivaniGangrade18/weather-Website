document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '66a0b35651e3fc44b536d48108015046'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        })
        .catch(error => {
            alert(error.message);
            console.error('Error fetching weather data:', error);
        });
});