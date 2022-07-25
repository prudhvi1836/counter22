import React from "react";

function Input(props){
 const{specifyType,giveValue,onChangeHandler}=props
    return(
    <input type = {specifyType} value={giveValue} onChange={onChangeHandler}></input>
    )
}

export default Input