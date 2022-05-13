import React from "react";

function Display({firstName, lastName}){
    return (
        <>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
        </>
        
    );
}
export default Display;