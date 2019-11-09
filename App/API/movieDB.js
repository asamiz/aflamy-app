// Api Key be8ef5421758e7d6ed70973e162bb034
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 5000
})