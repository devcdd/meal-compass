import { CSSProperties } from "react";
import { IRestaurant } from "../../types";
import {
  flexJustifyContent,
  flexVertical,
} from "../../styles/Layout/index.css.ts";
import { MiniCard, MiniCardImage } from "./index.css.ts";
import { Description, SubTitle } from "../../styles/Font/index.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Tag from "../Tag/Tag.tsx";

interface RestaurantMiniCardProps {
  restaurant: IRestaurant;
}

const RestaurantMiniCard = (props: RestaurantMiniCardProps) => {
  return (
    <article className={MiniCard}>
      <section style={{ width: "50%" }}>
        <img
          className={MiniCardImage}
          alt={"restaurant-image"}
          src={props.restaurant.image_list[0]}
          width={200}
        />
      </section>
      <section
        className={flexVertical}
        style={
          assignInlineVars({
            [flexJustifyContent]: "flex-start",
            width: "50%",
            gap: "5px",
            textAlign: "initial",
          }) as CSSProperties
        }
      >
        <div className={SubTitle}>{props.restaurant.name}</div>
        <div className={Description}>{props.restaurant.location}</div>
        <div>
          {props.restaurant.tag_list.map((tag) => {
            return <Tag text={tag} />;
          })}
        </div>
      </section>
    </article>
  );
};

export default RestaurantMiniCard;
