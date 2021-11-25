import React from "react";
import SearchPanel from "../search-panel/search-panel";
import './app-filter.css';

const AppFilter = () =>{
    return(
        <div className="app-filter">
            <SearchPanel/>
            <div className="btn-group">
            <bottun
            className="btn btn-light"
            type="button"
            >
                Все сотрудники
            </bottun>
            <bottun
            className="btn btn-light"
            type="button"
            >
                На повышение
            </bottun>
            <bottun
            className="btn btn-light"
            type="button"
            >
                З/П больше 1000$
            </bottun>
            </div>
        </div>
        
    );
};

export default AppFilter