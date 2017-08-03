/*
 * @Author: JUN 
 * @Date: 2017-08-01 10:13:07 
 */
import axios from 'axios';
const Toast = require('@remobile/react-native-toast');

let ajax = axios.create({
    baseURL: 'http://gank.io/api/data',
    timeout: 1000,
    responseType: 'json'
});

export default ajax;