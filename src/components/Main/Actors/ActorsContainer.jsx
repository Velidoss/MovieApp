import React from "react";
import {connect} from "react-redux";
import {getPopularActors} from "../../../redux/actorsReducer";
import Actors from "./Actors";

class ActorsContainer extends React.Component{

    componentDidMount() {
        this.props.getPopularActors();
    }

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
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        popularActors: state.actors.popularActors
    }

};

export default connect(mapStateToProps,{getPopularActors})(ActorsContainer);