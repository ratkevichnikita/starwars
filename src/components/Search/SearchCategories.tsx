import React, {FC} from 'react';
import {ISearchCategories} from "../../types/search";
import cn from "classnames";

const SearchCategories:FC<ISearchCategories> = ({categories,selectedCategory,onClick}) => {
    return (
        <div className="search-categories">
            {categories.map(item => {
                return (
                    <div
                        key={item}
                        className={cn("search-category-item", selectedCategory === item? 'active': '')}
                        onClick={() => onClick(item)}
                    >
                        {item}
                    </div>
                )
            })}
        </div>
    );
};

export default SearchCategories;