import { createStore } from "redux";

type CurrentState = {
  num: number;
  name: string;
};
type Action = {
  type: string;
  payload: any;
};

const currentState: CurrentState = {
  num: 0,
  name: "jsw",
};

const reducer = (state: CurrentState = currentState, action: Action) => {
  return { ...state, [action?.type]: action?.payload };
};

export default createStore(reducer);
