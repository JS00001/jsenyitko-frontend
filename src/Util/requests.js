import axios from 'axios';

export async function whitelist(auth, ign) {
    let request = await axios.post(`https://jsenyitko.tech/api/v1/whitelist?ign=${ign}`, {}, {headers: {'Authorization': auth}})
    return request;
};

export async function getUser() {
    let request = await axios.get(`https://jsenyitko.tech/api/v1/getuser`);
    return request;
};

export async function getEvents(auth) {
    let request = await axios.get(`https://jsenyitko.tech/getevents`, {}, {headers: {'Authorization': auth}})
    return request;
};
