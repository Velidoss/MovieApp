import React, {useEffect} from "react";
import style from '../../Movies/Movies.module.scss';
import Movie from "../../Movies/Movie";
import {connect} from "react-redux";
import {deletePlaylist} from "../../../../redux/playlistsReducer";
import {Redirect,useHistory} from "react-router-dom";


const PlayListDetails=(props)=>{

    let history = useHistory();

    const deletePlaylist=()=>{
        props.deletePlaylist(props.listId);
        history.push("/account/playlists")
    };

    return (
        <div className={style.container}>
             <div className={style.playlist_title}>
                 <h2 className={style.pageTitle}><span>Playlist: &nbsp;</span>{props.title}</h2>
                 <button className={style.deleteBtn} onClick={()=>deletePlaylist()} type={'submit'}>Delete playlist</button>
             </div>
            <div className={style.itemsList} >
                {props.popularMovies.map(movie=>{
                    return (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            type={"movie"}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            release_date={movie.release_date}
                            genre_ids={movie.genre_ids}
                            genres={props.movieGenres}
                        />
                    )
                })
                }
            </div>
        </div>
    )};

let mapStateToProps= (state)=>{
    return {}
};

export default connect(mapStateToProps, {deletePlaylist})(PlayListDetails);