import axios from 'axios';

export default useWeatherFetch = {
    async fetch() {
        const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key= d8328c0ed205414bbce235042241901&q=Kielce&days=1&aqi=no&alerts=no');  
        return response.data.current;      
    },
  
    convertDate(weather) {
        let time = weather.last_updated.split(' ');
        time = {
          date: time[0],
          hour: time[1],
          onlyHour: parseInt(time[1].split(':')[0], 10),
          onlyMinutes: parseInt(time[1].split(':')[1], 10)
        };

        return time;
    }
};
