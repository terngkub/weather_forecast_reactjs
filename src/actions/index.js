import axios from 'axios';

const API_KEY = '85c79cc171ab27935ebf9413c47164a3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log(request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
