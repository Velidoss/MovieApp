import React from "react";
import {connect} from "react-redux";
import {getPopularActors, setCurrentPage} from "../../../redux/actorsReducer";
import Actors from "./Actors";
import {withRouter} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";

class ActorsContainer extends React.Component{

    componentDidMount() {
        this.props.getPopularActors(this.props.currentPage);
    };

    onPageChange = (page)=>{
        this.props.getPopularActors(page);
        this.props.setCurrentPage(page);
    };

    render(){
        if(!this.props.popularActors){
            return (
                <div>

                </div>
            )
        }
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
    return {
        popularActors: state.actors.popularActors,
        currentPage: state.actors.currentPage,
        totalPages: state.actors.totalPages
    }

};

export default connect(mapStateToProps,{getPopularActors, setCurrentPage})(withRouter(ActorsContainer));