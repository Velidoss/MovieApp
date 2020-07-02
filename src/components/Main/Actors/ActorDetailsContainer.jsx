import React from "react";
import ActorDetails from "./ActorDetails";
import {connect} from "react-redux";
import {getActorDetails} from "../../../redux/actorsReducer";
import {withRouter} from "react-router-dom";

class ActorDetailsContainer extends React.Component{

    componentDidMount() {
        let actorId = this.props.match.params.actorId;
        this.props.getActorDetails(actorId);
    }

    render(){
        if(!this.props.actorDetails ){
            return (
                <div></div>
            )
        }
        return (<div >
            <ActorDetails {...this.props} />
        </div>)
    }
}

let mapStateToProps = (state) =>{
    return {
        actorDetails: state.actors.actorDetails,
    }
};

export default connect(mapStateToProps,{getActorDetails})(withRouter(ActorDetailsContainer));