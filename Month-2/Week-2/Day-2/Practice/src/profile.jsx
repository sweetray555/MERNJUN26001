import React from "react";

function profile({name,children}) {
    return(
        <div>
        profile
        <br />
        Name :{name}

        {children}
        </div>
    );
}

export default profile;