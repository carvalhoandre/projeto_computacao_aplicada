import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_HEROKU_AC_PORTIFOLIO
});

export const message = (data) => {
    return api.post("/client", data,{
        observe:'response',
        response: 'text'
    })
}
