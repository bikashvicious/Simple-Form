import React from "react";
import Card from "../Card/Card";

const Userlist = props => {
  return (
    <Card>
      <ul>
        {props.user.map(user => {
          <li>
            {user.name}({user.age}) years old {user.address} {user.email}
          </li>;
        })}
      </ul>
      ;
    </Card>
  );
};

export default Userlist;
