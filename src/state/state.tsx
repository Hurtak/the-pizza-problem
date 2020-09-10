export type Actions =
  | {
      type: "SET_PIZZA_1_DIAMETER";
      data: string;
    }
  | {
      type: "SET_PIZZA_2_DIAMETER";
      data: string;
    }
  | {
      type: "SET_PIZZA_1_PRICE";
      data: string;
    }
  | {
      type: "SET_PIZZA_2_PRICE";
      data: string;
    };

export type State = {
  pizza1Diameter: string;
  pizza2Diameter: string;

  pizza1Price: string;
  pizza2Price: string;
};

export const initialState: State = {
  pizza1Diameter: "32",
  pizza2Diameter: "45",

  pizza1Price: "149",
  pizza2Price: "239",
};

export function stateReducer(state: State, action: Actions): State {
  switch (action.type) {
    case "SET_PIZZA_1_DIAMETER":
      return {
        ...state,
        pizza1Diameter: action.data,
      };

    case "SET_PIZZA_2_DIAMETER":
      return {
        ...state,
        pizza2Diameter: action.data,
      };

    case "SET_PIZZA_1_PRICE":
      return {
        ...state,
        pizza1Price: action.data,
      };

    case "SET_PIZZA_2_PRICE":
      return {
        ...state,
        pizza2Price: action.data,
      };

    default:
      throw new Error("Unknown action");
  }
}
