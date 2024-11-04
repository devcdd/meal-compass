import React from "react";
import { IRestaurant } from "../../types";
import { Card } from "./index.css.ts";
import { Title } from "../../styles/Font/index.css.ts";

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <div
      className={Card}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={props.restaurant.image_list[0] || "/path/to/default-image.jpg"}
        alt={"레스토랑 이미지가 없습니다."}
        style={{
          width: "300px",
          height: "200px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          margin: "1rem 0",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <div className={Title}>{props.restaurant.name}</div>
        <p>{props.restaurant.location}</p>
        <div>
          <strong>태그: </strong>
          {props.restaurant.tag_list.join(", ")}
        </div>
        <div>
          <strong>메뉴: </strong>
          {props.restaurant.menu_list.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
