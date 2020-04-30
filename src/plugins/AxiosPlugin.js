import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_APY_KEY = process.env.REACT_APP_REACT_APP_APY_KEY;

const api = axios.create({
  baseURL: `${BASE_URL}/${REACT_APP_APY_KEY}`
})

export default api
