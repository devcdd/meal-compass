import { IRestaurant } from "../../types";
import { Card, CardImage, hashtag } from "./index.css.ts";
import {
  Description,
  BlueDescription,
  Title,
  YellowDescription,
} from "../../styles/Font/index.css.ts";
import KakaoMap from "../KakaoMap/KakaoMap.tsx";
import { flexVertical } from "../../styles/Layout/index.css.ts";
import { calculateDistance } from "../../lib/util";
import { useLocationStore } from "../../stores/useLocationStore.ts";
import Button from "../Button/Button.tsx";
import Tag from "../Tag/Tag.tsx";

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const { current, destination } = useLocationStore();

  return (
    <section className={Card}>
      <section className={flexVertical} style={{ gap: "7px" }}>
        <img
          src={props.restaurant.image_list[0] || "/path/to/default-image.jpg"}
          className={CardImage}
          alt={"레스토랑 이미지가 없습니다."}
        />
        <article>
          <div className={Title}>{props.restaurant.name}</div>
          <div className={Description}>{props.restaurant.location}</div>
        </article>

        <section>
          {props.restaurant.tag_list.map((tag) => (
            <Tag text={tag} />
          ))}
        </section>

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
        {current.latitude !== 0 && current.longitude !== 0 && (
          <>
            <div className={Description}>
              현 위치로부터 약 {calculateDistance(current, destination)} 떨어져
              있어요.
            </div>
          </>
        )}
        <KakaoMap
          location={props.restaurant.location}
          name={props.restaurant.name}
        />
        <Button
          style={{
            backgroundColor: "#F6E242",
            color: "#381F1F",
          }}
          onClick={() => {
            const kakaoCustomURL = `kakaomap://route?sp=${current.latitude},${current.longitude}&ep=${destination.latitude},${destination.longitude}&by=FOOT`;
            window.location.href = kakaoCustomURL;
          }}
        >
          카카오맵 바로가기
        </Button>
      </section>
    </section>
  );
};

export default RestaurantCard;
