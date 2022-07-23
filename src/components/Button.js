import React from "react";


function Button(props){
    const {btnText="",onClickHandler}=props
    return(
        <button onClick={onClickHandler}>{btnText}</button>
    )
}

export default Button;