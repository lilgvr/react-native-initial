import axios, {CreateAxiosDefaults} from 'axios';
import {API_URL} from 'constants/api';

const apiConfig: CreateAxiosDefaults = {
  baseURL: API_URL,
};

const $api = axios.create(apiConfig);

export default $api;
