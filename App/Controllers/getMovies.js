import { tmdb } from '../API'

export default getMovies = async query => {
    let data = []
    const params = { api_key: 'be8ef5421758e7d6ed70973e162bb034', query }
    await tmdb.get('/3/search/movie', { params }).then(res => data = res.data.results)
    return data
}