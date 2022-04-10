import React from "react";
import "./formInput.css";

const Forminput = props => {
  const handleChange = e => {
    props.setUsername(e.target.value);
  };
  return (
    <div className="formInput">
      <input placeholder={props.placeholder} onChange={handleChange} />
    </div>
  );
};

export default Forminput;
