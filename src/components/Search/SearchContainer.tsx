import React, {FC, useEffect} from 'react';
import {useNavigate } from "react-router-dom";
//store
import SearchStore from "../../store/SearchStore";
import {observer} from "mobx-react-lite";
//components
import Search from "./Search";
import Loader from "../Loader/Loader";
import SearchCategories from "./SearchCategories";
//styles
import './search.css';
//types
import {ISearchContainerProps} from '../../types/search';
type searchValue = string


const SearchContainer:FC<ISearchContainerProps> = observer(({ placeholder }) => {

    const navigate = useNavigate()

    useEffect(() => {
        SearchStore.getSearchCategories()
    },[])

    const handleChange = (value:searchValue) => {
        SearchStore.getSearchQuery(value)
    }

    const selectCategory = (value:string) => {
        SearchStore.setCategory(value)
    }

    const handleSearch = () => {
       SearchStore.getSearchResult()
       navigate(`/search/${SearchStore.searchQuery}`);
    }

    return (
        <>
            { SearchStore.searchCategoriesLoader
                ? <Loader />
                : <>
                    <Search
                        placeholder={ placeholder }
                        searchValue={SearchStore.searchQuery}
                        onChange={handleChange}
                        handleSearch={handleSearch}
                    />
                    <SearchCategories
                        categories={SearchStore.categoriesList}
                        selectedCategory={SearchStore.selectedCategory}
                        onClick={selectCategory}
                    />
                </>


            }
        </>

    );
});

export default SearchContainer;