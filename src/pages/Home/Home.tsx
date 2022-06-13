import React, {FC} from 'react'
//components
import SearchContainer from "../../components/Search/SearchContainer";
//styles
import cn from 'classnames';
import './home.css'

const Home:FC = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1 className={cn('home-title')}>Hello, stranger</h1>
                <SearchContainer placeholder='What are you looking for' />
                <p>test</p>
            </div>
        </div>

    )
}

export default Home