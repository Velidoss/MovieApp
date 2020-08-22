import React from "react";
import style from "../../Main/Actors/Actors.module.scss";
import PageButton from "./PageButton";

const Pagination = ({totalPages, currentPage, onPageChange}) => {

    let pages = Array.from({length: totalPages}, (v, k) => k + 1);

    return (
        <div className={style.pagination}>
            {pages.map(page => {
                switch (page) {
                    case page = 1:
                        if (currentPage > page + 3) {
                            return (
                                <div>
                                    <PageButton key={page} page={page} dotsRight={true}
                                                onPageChange={onPageChange}/>
                                </div>
                            );
                        }
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    case page = totalPages:
                        if (currentPage > totalPages - 4) {
                            return (
                                <PageButton key={page} page={page} onPageChange={onPageChange}/>
                            );
                        }
                        return (
                            <PageButton key={page} page={page} dotsLeft={true} onPageChange={onPageChange}/>
                        );

                    case page = currentPage:
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    case page = currentPage - 2:
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    case page = currentPage - 1:
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    case page = currentPage + 1:
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    case page = currentPage + 2:
                        return (
                            <PageButton key={page} page={page} onPageChange={onPageChange}/>
                        );
                    default:
                        return null;
                }
            })}
        </div>)
};

export default Pagination;