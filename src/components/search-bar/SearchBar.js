import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
const CataloguePage = props.CataloguePage;
    if (CataloguePage) {
        return (
            <div className={"SearchBar"}>
                <input
                    type="text"
                    placeholder="Поиск по каталогу"

                />
            </div>
        )
    }
    else {
        return (
            <div className={"SearchBar otherPages"}>
                <input
                    type="text"
                    placeholder="Поиск по каталогу"

                />
            </div>
        )
    }
};
export default SearchBar;