import React from "react";
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

class ActorsContainer extends React.Component{

    componentDidMount() {
        this.props.getPopularActors(this.props.currentPage);
    };

    onPageChange = (page)=>{
        this.props.getPopularActors(page);
        this.props.setCurrentPage(page);
    };

    render(){
        if(!this.props.popularActors || !this.props.currentPage || !this.props.totalPages){
            return (
                <div>

                </div>
            )
        }
        console.log('render');
        return (
            <div>
                <Actors
                {...this.props}
                />
                <Pagination
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                />
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    console.log('mapstatetopropsActors');
    return {
        popularActors: selectPopularActors(state),
        currentPage: selectCurrentPage(state),
        totalPages: selectTotalPages(state),
    }

};

export default connect(mapStateToProps,{getPopularActors, setCurrentPage})(withRouter(ActorsContainer));