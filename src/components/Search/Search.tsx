import React, {FC} from 'react';
//styles
import cn from 'classnames';
//images
import search from '../../images/search/Search.svg'
//types
import {ISearchProps} from '../../types/search';

const Search:FC<ISearchProps> = ({ placeholder,size,searchValue,onChange,handleSearch }) => {
    return (
        <div className={ cn('search-container',size ? size : null) }>
            <div className="search-row">
                <img className={ cn('search-icon')} src={ search } alt="Иконка поиска"/>
                <input
                    type="search"
                    className={ cn('search') }
                    placeholder={ placeholder }
                    onChange={ (e) => onChange(e.target.value) }
                    value={ searchValue }
                />
                <button className={ cn('search-btn')} onClick={() => handleSearch() }>
                    Find
                </button>
            </div>
        </div>
    )
}

export default Search