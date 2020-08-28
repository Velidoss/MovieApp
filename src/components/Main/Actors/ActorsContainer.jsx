import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPopularActors, setCurrentPage} from "../../../redux/actorsReducer";
import Actors from "./Actors";
import {withRouter} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import {
    selectCurrentPage,
    selectPopularActors,
    selectTotalPages
} from "../../../redux/selectors/ActorsSelector";
import Preloader from "../../common/Preloader/Preloader";

const ActorsContainer = (props) => {

    useEffect(() => {
        props.getPopularActors(props.currentPage);
    }, [props.currentPage]);

    const onPageChange = (page) => {
        props.getPopularActors(page);
        props.setCurrentPage(page);
    };

    if (!props.popularActors || !props.currentPage || !props.totalPages) {
        return <Preloader/>
    }
    return (
        <div>
            <Actors
                {...props}
            />
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
        </div>
    )

};

let mapStateToProps = (state) => {
    return {
        popularActors: selectPopularActors(state),
        currentPage: selectCurrentPage(state),
        totalPages: selectTotalPages(state),
    }

};

export default connect(mapStateToProps, {getPopularActors, setCurrentPage})(withRouter(ActorsContainer));