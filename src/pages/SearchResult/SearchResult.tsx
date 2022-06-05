import React, {FC} from 'react';
//components
import SearchContainer from "../../components/Search/SearchContainer";
import CardsContainer from "../../components/Cards/CardsContainer";
//styles
import cn from "classnames";
import './searchResult.css'


const SearchResult:FC = () => {
    return (
        <div className={cn('search-result-wrapper')}>
            <SearchContainer placeholder='What are you looking for' />
            <CardsContainer  />
        </div>
    );
};

export default SearchResult;