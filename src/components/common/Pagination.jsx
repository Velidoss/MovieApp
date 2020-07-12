import React from "react";
import style from "../Main/Actors/Actors.module.scss";

class Pagination extends React.Component{

    pages = Array.from({length: this.props.totalPages}, (v,k)=> k+1);;

    render(){
        return (
            <div className={style.pagination}>
                {this.pages.map(page=>{
                    switch(page){
                        case page=1:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}> {page}</button>
                                </div>
                            );
                        case page=this.props.totalPages:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}> {page}</button>
                                </div>
                            );
                        case page=this.props.currentPage:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}>{page}</button>
                                </div>
                            );
                        case page=this.props.currentPage-2:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}>{page}</button>
                                </div>
                            );
                        case page=this.props.currentPage-1:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}>{page}</button>
                                </div>
                            );
                        case page=this.props.currentPage+1:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}>{page}</button>
                                </div>
                            );
                        case page=this.props.currentPage+2:
                            return(
                                <div className={style.page}>
                                    <button onClick={(event)=>this.props.onPageChange(page)}>{page}</button>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>)

    }

}

export default Pagination;