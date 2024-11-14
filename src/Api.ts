import axios from 'axios'

axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type" : "aplication/json"
    }
})