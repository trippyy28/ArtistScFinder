import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import soundcloudIcon from "@iconify-icons/logos/soundcloud";

import "../containers/App.css";
const Card = ({ name, email, id, img, sc }) => {
  return (
    <div className="bg-light-yellow dib br3 pa3 ma2 grow tc">
      <img alt="monsters" src={img} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p id="font" className="br3 ">
          Dj&Producer
        </p>
        <a href={sc}>
          <Icon icon={soundcloudIcon} />
        </a>
      </div>
    </div>
  );
};

export default Card;
