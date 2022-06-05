export interface ISearchContainerProps {
    placeholder: string,
    size?: string,
}

export interface ISearchProps extends ISearchContainerProps {
    searchValue: string,
    onChange: (val:string) => void,
    handleSearch: () => void
}

export interface ISearchCategories {
    categories: string[],
    selectedCategory: string,
    onClick: (val:string) => void
}

export interface ISearchPeople {
    name: string,
    birthYear: string,
    eyeColor: string,
    gender: string,
    hairColor: string,
    height: string,
    mass: string,
    skinColor: string,
    homeworld: string,
    films: [],
    species: [],
    starships: [],
    vehicles: [],
    url: string,
    created: string,
    edited: string,
}

export interface ISearchFilms {

}

export type ISearch = ISearchPeople | ISearchFilms