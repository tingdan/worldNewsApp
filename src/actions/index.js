import axios from 'axios'

const API_KEY = '7a5e75b782e7448990f09f86d42467e3'
const API_URL = `https://newsapi.org/v1/articles?&sortBy=top&apiKey=${API_KEY}`

export function searchNews(searchterm) {
    return { type: "SEARCH_NEWS", searchterm}
}

export function addNews(news) {
    return {type: "ADD_NEWS", news}
}

export function changeNews(agency) {
        const url = `${API_URL}&source=${agency}`;
        const request = axios.get(url);
        return { type: "CHANGE_NEWS", payload: request}
}

export function changeAgency(agency) {
    return { type: "CHANGE_AGENCY", agency }
}
