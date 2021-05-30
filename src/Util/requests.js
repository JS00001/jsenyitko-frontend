import axios from 'axios';
import config from '../Util/config';

export async function whitelist(auth, ign) {
    let request = await axios.post(`${config.proxyUrl}/api/v2/whitelist?ign=${ign}`, {}, {headers: {'Authorization': auth}})
    return request;
};

export async function getUser() {
    let request = await axios.get(`${config.proxyUrl}/api/v2/getuser`);
    return request;
};

export async function getEvents(auth) {
    let request = await axios.get(`${config.proxyUrl}/api/v2/getevents`, {}, {headers: {'Authorization': auth}})
    return request;
};
