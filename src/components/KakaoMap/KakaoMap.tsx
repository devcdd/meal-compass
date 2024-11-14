import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any; // 또는 kakao: typeof import('kakao.maps');
  }
}

interface KakaoMapApiProps {
  location: string;
  name: string;
}

const KakaoMap = (props: KakaoMapApiProps) => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=262b9335f92d9f664cf287bf29a682d8&libraries=services&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.493056, 127.034096),
          level: 2,
        };

        const map = new window.kakao.maps.Map(container, options);

        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(props.location, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            ); // y: 위도, x: 경도

            // const newLocation = {
            //   latitude: result[0].y,
            //   longtitude: result[0].x,
            // };

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            const infoContent = `<div style="width:150px;text-align:center;color:#000;font-size:0.8rem;padding:6px 0;">${props.name}</div>`;

            const infowindow = new window.kakao.maps.InfoWindow({
              content: infoContent,
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          }
        });
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, [props.location, props.name]);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KakaoMap;
