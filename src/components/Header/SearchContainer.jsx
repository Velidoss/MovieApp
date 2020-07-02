import React from "react";
import style from "./Header.module.scss";
import {connect} from "react-redux";
import {changeQuery, searchByQuery} from "../../redux/searchReducer";
import {NavLink} from "react-router-dom";

class SearchContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {isOpen: false};
    }

    searchQuery = (event)=>{
        if(event.target.value.length > 1 ){
            this.openResultsBar();
            this.props.searchByQuery(event.target.value);
        }
    };
    openResultsBar = () =>{
        if(!this.state.isOpen) {
            this.setState({isOpen: true});
        }
    };
    closeResultsBar = () =>{
        if(this.state.isOpen) {
            this.setState({isOpen: false});
        }
    };

    render(){
        return (
            <div className={style.search} onMouseLeave={this.closeResultsBar}>
                <form action="">
                    <input type="text" onChange={this.searchQuery}  onClick={this.openResultsBar}  value={this.state.value} />
                </form>
                <ul  className={style.results}>
                    { this.props.queryResult && this.state.isOpen ?
                        this.props.queryResult.map(result=>{
                        switch(result.media_type){
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
                                    <div >
                                        <NavLink className={style.result} to={`/tvshow/${result.id}`}><img className={style.result_img} src={ result.poster_path
                                            ? `https://image.tmdb.org/t/p/w300${result.poster_path}`
                                            : `https://via.placeholder.com/200x300`} alt=""/>
                                            <p className={style.result_name}>{result.name}</p>
                                        </NavLink>
                                    </div>
                                );
                            case "person":
                                return (
                                    <div>
                                        <NavLink className={style.result} to={`/actor/${result.id}`}><img className={style.result_img} src={result.profile_path
                                            ? `https://image.tmdb.org/t/p/w300${result.profile_path}`
                                            : `https://via.placeholder.com/200x300`} alt=""/>
                                            <p className={style.result_name}>{result.name}</p>
                                        </NavLink>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })
                        : null
                    }
                </ul>

            </div>
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        query : state.search.query,
        queryResult: state.search.queryResult
    }
};


export default connect(mapStateToProps, {changeQuery, searchByQuery})(SearchContainer);