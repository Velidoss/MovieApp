import React, {useEffect} from "react";
import ActorDetails from "./ActorDetails";
import {connect} from "react-redux";
import {getActorDetails} from "../../../redux/actorsReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const ActorDetailsContainer =(props)=>{

    useEffect(()=>{
        let actorId = props.match.params.actorId;
        props.getActorDetails(actorId);
    }, []);


    if(!props.actorDetails ){
        return <Preloader/>
    }
    return (<div>
        <ActorDetails {...props} />
    </div>)
};

let mapStateToProps = (state) =>{
    return {
        actorDetails: state.actors.actorDetails,
    }
};

export default connect(mapStateToProps,{getActorDetails})(withRouter(ActorDetailsContainer));