import React from "react";

const Message = ({children, color}) => {
    if(!color)
        color = "primary";
    return(
        <div className={`alert alert-${color}`}>
            {children}
        </div>
    )
};

export default Message;