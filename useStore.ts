import create from "zustand";

interface InitialState {
  [key: string]: any;
}

const initialState: InitialState = {
  number: 0,
};

export const useStore = create<InitialState>((set) => ({
  ...initialState,
  dispatch: (type: string, payload: any): any => {
    set((state) => (state[type] = payload));
    return payload;
  },
}));
