import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {
  const handleCityChange = useCallback((city) => {
    console.log('Selected City: ', city);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd39964d497ecca171abdf033a7760f6&units=metric`)
    .then(res => res.json())
    .then(data => {
      const weatherData = {
        city: data.name,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].main
      };
      console.log(weatherData)
    });
  }, []);
  return (
    <section>
      <PickCity onSearch={handleCityChange}/>
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;