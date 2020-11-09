import React from "react";
import Card from "./Card";

const CardList = ({ djs }) => {
  return (
    <div>
      {djs.map((user, i) => {
        return (
          <Card
            key={i}
            id={djs[i].id}
            name={djs[i].name}
            email={djs[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
