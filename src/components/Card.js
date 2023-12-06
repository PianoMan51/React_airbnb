import React from "react";
import star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + props.item.coverImg}
        width="175px"
        height="235px"
      />
      {badgeText && <div className="image_label">{badgeText}</div>}
      <div className="image_text">
        <div className="stats">
          <img src={star} width="15px" height="15px" />
          <span>{props.item.stats.reviewCount} </span>
          <span className="gray">({props.item.stats.rating}) • </span>
          <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p>
          <strong>From ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
