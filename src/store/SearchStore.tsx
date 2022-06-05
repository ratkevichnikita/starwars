import { makeAutoObservable, runInAction } from "mobx";
import {searchAPI} from "../api/api";
import {ISearchPeople} from "../types/search";

class SearchStore {
    //search categories
    categoriesList:string[] = [];
    selectedCategory:string = 'people';
    searchCategoriesLoader:boolean = false;
    categoriesError = false;
    //search
    searchQuery:string = '';
    searchResult:ISearchPeople[] | any = []
    searchLoader:boolean = false

    constructor() {
        makeAutoObservable(this)
    }
     getSearchCategories = async() => {
         runInAction(() => {
             this.searchCategoriesLoader = true
         })
        try {
            const resp = await searchAPI.getSearchCategories()
            if(resp) {
                runInAction(() => {
                    this.categoriesList = Object.keys(resp)
                    this.searchCategoriesLoader = false
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    getSearchQuery = (query:string) => {
        this.searchQuery = query
    }

    getSearchResult = async() => {
        runInAction(() => {
            this.searchLoader = true
        })
        try {
            const resp = await searchAPI.getSearchResult(this.selectedCategory,this.searchQuery)
            if(resp) {
                runInAction(() => {
                    this.searchResult = resp
                    this.searchLoader = false
                })
            }
        } catch(error) {
            console.log(error)
        }
    }

    setCategory = (categoryName:string) => {
        this.selectedCategory = categoryName
    }

    get getSearchResultList() {
        let result = []
        if(this.searchResult?.length > 0) {
            result = this.searchResult.map((item:any) => {
                const { name,birthYear,eyeColor,gender,hairColor,height,mass,skinColor, homeworld,films,species,starships,vehicles, url, created,edited } = item
                return {
                    birthYear,
                    name,
                    eyeColor,
                    gender,
                    hairColor,
                    height,
                    mass,
                    skinColor,
                    homeworld,
                    films,
                    species,
                    starships,
                    vehicles,
                    url,
                    created,
                    edited
                }
            })
        }
        return result
    }
}

export default new SearchStore()