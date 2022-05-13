import React, { useState } from "react";
import Display from "./Diplay";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("hello");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstName(event){
    setFirstName(event.target.value)
  }

  function handleLastName(event){
    setLastName(event.target.value)
  }

  return (
    <div>
    <Form firstName={firstName}
    lastName={lastName}
    handleFirstName={handleFirstName}
    handleLastName={handleLastName}
    />
    <Display firstName={firstName} 
    lastName={lastName}/>
    </div>
  );
}

export default ParentComponent;
