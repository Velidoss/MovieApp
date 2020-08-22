import React, {useState} from "react";
import style from "./Header.module.scss";
import {connect} from "react-redux";
import {changeQuery, searchByQuery} from "../../redux/searchReducer";
import {NavLink} from "react-router-dom";
import searchIcon from "../../styles/svg/search-solid.svg"

const SearchContainer = (props) => {

    const [isOpen, toggleIsOpen] = useState(false);

    const searchQuery = (event) => {
        if (event.target.value.length > 1) {
            openResultsBar();
            props.searchByQuery(event.target.value);
        }
    };
    const openResultsBar = () => {
        if (!isOpen) toggleIsOpen(true);

    };
    const closeResultsBar = () => {
        if (isOpen) toggleIsOpen(false);
    };

    return (
        <div className={style.search} onMouseLeave={closeResultsBar}>
            <form action="" className={style.searchbar}>
                <input className={style.searchfield} type="text" onChange={searchQuery} onClick={openResultsBar}
                /><img
                src={searchIcon} alt=""/>
            </form>

            {props.queryResult && isOpen ? <ul className={style.results}>
                    {props.queryResult.map(result => {
                        switch (result.media_type) {
                            case "movie":
                                return (
                                    <div>
                                        <NavLink className={style.result} to={`/movie/${result.id}`}>
                                            <img className={style.result_img} src={result.poster_path
                                                ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
                                                : `https://via.placeholder.com/200x300`} alt=""/>
                                            <p className={style.result_name}>{result.title}</p>
                                        </NavLink>
                                    </div>
                                );
                            case "tv":
                                return (
                                    <div>
                                        <NavLink className={style.result} to={`/tvshow/${result.id}`}><img
                                            className={style.result_img} src={result.poster_path
                                            ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
                                            : `https://via.placeholder.com/200x300`} alt=""/>
                                            <p className={style.result_name}>{result.name}</p>
                                        </NavLink>
                                    </div>
                                );
                            case "person":
                                return (
                                    <div>
                                        <NavLink className={style.result} to={`/actor/${result.id}`}><img
                                            className={style.result_img} src={result.profile_path
                                            ? `https://image.tmdb.org/t/p/w300${result.profile_path}`
                                            : `https://via.placeholder.com/200x300`} alt=""/>
                                            <p className={style.result_name}>{result.name}</p>
                                        </NavLink>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </ul>
                : null
            }
        </div>
    )};

let mapStateToProps = (state) => {
    return {
        query: state.search.query,
        queryResult: state.search.queryResult
    }
};


export default connect(mapStateToProps, {changeQuery, searchByQuery})(SearchContainer);