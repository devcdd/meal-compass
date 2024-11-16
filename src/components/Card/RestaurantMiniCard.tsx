import { CSSProperties } from "react";
import { IRestaurant } from "../../types";
import {
  flexJustifyContent,
  flexVertical,
} from "../../styles/Layout/index.css.ts";
import { miniCard, miniCardImage, miniCardSection } from "./index.css.ts";
import { description, subTitle } from "../../styles/Font/index.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Tag from "../Tag/Tag.tsx";

interface RestaurantMiniCardProps {
  restaurant: IRestaurant;
  onClick?: () => void;
}

const RestaurantMiniCard = (props: RestaurantMiniCardProps) => {
  return (
    <article className={miniCard} onClick={props.onClick}>
      <section className={miniCardSection}>
        <img
          className={miniCardImage}
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
        <div className={subTitle}>{props.restaurant.name}</div>
        <div className={description}>{props.restaurant.location}</div>
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
