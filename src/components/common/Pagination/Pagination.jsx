import React from "react";
import style from "../../Main/Actors/Actors.module.scss";
import PageButton from "./PageButton";

class Pagination extends React.Component{

    pages = Array.from({length: this.props.totalPages}, (v,k)=> k+1);;

    render(){
        return (
            <div className={style.pagination}>
                {this.pages.map(page=>{
                    switch(page){
                        case page=1:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.totalPages:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.currentPage:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.currentPage-2:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.currentPage-1:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.currentPage+1:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        case page=this.props.currentPage+2:
                            return(
                                <PageButton key={page} page={page} onPageChange={this.props.onPageChange} />
                            );
                        default:
                            return null;
                    }
                })}
            </div>)
    }
}

export default Pagination;