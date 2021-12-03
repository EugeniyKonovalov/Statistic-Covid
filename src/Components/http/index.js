import axios from "axios";
const $countryData = axios.get(`https://api.covid19api.com/summary`);
export { $countryData };
