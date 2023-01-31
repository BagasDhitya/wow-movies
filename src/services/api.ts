import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie'
})

export default {
    nowPlaying: () => 
        instance({
             method: 'GET',
             url: `/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
         }),
    popular: (page: number) =>
        instance({
            method: 'GET',
            url: `/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
         })
}