import React, { useState } from "react";
// import Forminput from "./components/Forminput";
import "./App.css";
import Userlist from "./components/Userlist/Userlist";

function App() {
  const [focused, setFocused] = useState(false);

  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [useraddress, setUseraddress] = useState("");
  const [useremail, setUseremail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, userage, useraddress, useremail);
    setUserage("");
    setUsername("");
    setUseraddress(" ");
    setUseremail("");
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            value={username}
            required="true"
            pattern="^[A-Za-z0-9]{3,16}$"
            type="text"
            placeholder="name"
            onChange={e => {
              setUsername(e.target.value);
            }}
            onBlur={e => {
              setFocused(true);
            }}
            focused={focused.toString()}
          />
          <span>Username should be 3-16 characters !</span>

          <input
            value={userage}
            type="number"
            placeholder="age"
            onChange={e => {
              setUserage(e.target.value);
            }}
          />

          <input
            value={useraddress}
            placeholder="address"
            onChange={e => {
              setUseraddress(e.target.value);
            }}
          />
          <input
            value={useremail}
            required="true "
            type="email"
            placeholder="email"
            onChange={e => {
              setUseremail(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
<Userlist users={[]} />;

export default App;
