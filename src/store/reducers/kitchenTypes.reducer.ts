import {
  KITCHEN_TYPES_FAILURE,
  KITCHEN_TYPES_REQUEST,
  KITCHEN_TYPES_SUCCESS,
  KitchenTypeState,
  KitchenTypeTyped
} from "../types/kitchenTypes.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: KitchenTypeState = {
  kitchenType: [],
  error: null,
  isLoading: false,
}

export const kitchenTypesReducer = (state = initialState, action: ActionWithPayload<KitchenTypeTyped[]>): KitchenTypeState => {
  switch (action.type) {
    case KITCHEN_TYPES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case KITCHEN_TYPES_SUCCESS:
      return<KitchenTypeState> {
        ...state,
        isLoading: false,
        error: null,
        kitchenType: action.payload,
      }
    case KITCHEN_TYPES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
