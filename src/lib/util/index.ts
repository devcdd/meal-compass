import { Coordinate } from "../../types";

export const calculateDistance = (
  coord1: Coordinate,
  coord2: Coordinate,
): string => {
  const toRadians = (degree: number) => (degree * Math.PI) / 180;

  const R = 6371; // 지구 반지름 (단위: km)
  const lat1 = toRadians(coord1.latitude);
  const lon1 = toRadians(coord1.longitude);
  const lat2 = toRadians(coord2.latitude);
  const lon2 = toRadians(coord2.longitude);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInKm = R * c;

  // 결과를 m 또는 km로 반환
  return distanceInKm < 1
    ? `${(distanceInKm * 1000).toFixed(1)}m`
    : `${distanceInKm.toFixed(2)}km`;
};
