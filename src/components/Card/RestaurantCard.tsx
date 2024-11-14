import { IRestaurant } from "../../types";
import { Card, CardImage } from "./index.css.ts";
import {
  Description,
  BlueDescription,
  Title,
  YellowDescription,
} from "../../styles/Font/index.css.ts";
import KakaoMap from "../KakaoMap/KakaoMap.tsx";
import { FlexVerticalLayout } from "../../styles/Layout/index.css.ts";

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <section className={Card}>
      <section className={FlexVerticalLayout} style={{ gap: "7px" }}>
        <img
          src={props.restaurant.image_list[0] || "/path/to/default-image.jpg"}
          className={CardImage}
          alt={"레스토랑 이미지가 없습니다."}
        />
        <article>
          <div className={Title}>{props.restaurant.name}</div>
          <div className={Description}>{props.restaurant.location}</div>
        </article>
        <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
          {props.restaurant.tag_list.map((tag) => (
            <div
              style={{
                backgroundColor: "#0047DE",
                borderRadius: "4px",
                padding: "0px 4px",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ marginRight: "2px" }}>#</span>
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "1rem" }}>
          <span className={YellowDescription}>
            {props.restaurant.menu_list.join(", ")}
          </span>{" "}
          등을 팔아요 !
        </div>
        {props.restaurant.description && (
          <div className={BlueDescription}>
            💬 {props.restaurant.description}
          </div>
        )}
        <KakaoMap
          location={props.restaurant.location}
          name={props.restaurant.name}
        />
      </section>
    </section>
  );
};

export default RestaurantCard;
