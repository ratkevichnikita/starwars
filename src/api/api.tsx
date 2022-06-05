import axios from "axios";
//types
import { ISearchCategories } from '../types/search'

type searchApi = string

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export const searchAPI = {
    getSearchCategories():Promise<ISearchCategories> {
        return instance.get('').then(res => res.data)
    },
    getSearchResult(category:string, query:string):Promise<searchApi> {
        return instance.get(`${category}/?search=${query}`).then(res => res.data.results)
    }
}



