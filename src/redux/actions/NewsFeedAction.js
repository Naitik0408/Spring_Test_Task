import axios from 'axios';
import { endpoint } from '../../../config';

const BASE_URL = endpoint.serverUrl;;
export async function NewsFeedAction() {
    return axios.get(`${BASE_URL}`)
}