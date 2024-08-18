import { atom } from "recoil";

export const ModelState = atom({
  key: "Click", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
