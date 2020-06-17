import React from "react";

const Auth= (props)=>{
    console.log(props);
    return (
        <div>
            <button onClick={()=>{props.authUser()}}>Auth</button>
        </div>
    );
};

export default Auth;