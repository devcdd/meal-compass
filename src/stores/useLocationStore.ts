import { create } from "zustand";
import { Coordinate } from "../types";
import { immer } from "zustand/middleware/immer";

interface UseLocationStoreType {
  current: Coordinate;
  destination: Coordinate;
}

export const useLocationStore = create<UseLocationStoreType>()(
  immer(() => ({
    current: { latitude: 0, longitude: 0 },
    destination: { latitude: 0, longitude: 0 },
  })),
);

export const setCurrentLocation = (current: Coordinate) => {
  useLocationStore.setState((state) => {
    state.current = current;
    return state;
  });
};

export const resetCurrentLocation = () => {
  useLocationStore.setState((state) => {
    state.current = { latitude: 0, longitude: 0 };
    return state;
  });
};

export const setDestinationLocation = (destination: Coordinate) => {
  useLocationStore.setState((state) => {
    state.destination = destination;
    return state;
  });
};

export const resetDestinationLocation = () => {
  useLocationStore.setState((state) => {
    state.destination = { latitude: 0, longitude: 0 };
    return state;
  });
};
