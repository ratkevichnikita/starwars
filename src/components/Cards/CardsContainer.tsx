import React, {FC} from 'react';
//components
import Cards from "./Cards";
import Loader from "../Loader/Loader";
//store
import SearchStore from "../../store/SearchStore";
import {observer} from "mobx-react-lite";
//styles
import cn from "classnames";
import './cards.css'

const CardsContainer:FC = observer(() => {

    const data = SearchStore.getSearchResultList

    return (
        <div className={cn('cards-wrapper')}>
            { SearchStore.searchLoader ? <Loader/> : <Cards data={data}/> }
        </div>
    );
});

export default CardsContainer;