import React from "react";
import image_grid from "../images/image_grid.png";
import Card from "./Card";
import data from "../data.js";

export default function Hero() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="content">
      <img src={image_grid} height="232px" className="grid_images" />
      <h4>Online Experiences</h4>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>

      <div className="hero_container">{cards}</div>
    </div>
  );
}
