import axios from 'axios'
import { host } from '../config'
console.log(host)
const instance = axios.create({
    baseURL:host
});
export default instance