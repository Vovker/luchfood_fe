import {MENU_FAILURE, MENU_REQUEST, MENU_SUCCESS, MenuCategoryTyped, MenuState} from "../types/menu.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: MenuState = {
  menu: [],
  error: null,
  isLoading: false,
}

export const menuReducer = (state = initialState, action: ActionWithPayload<MenuCategoryTyped[]>): MenuState => {
  switch (action.type) {
    case MENU_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case MENU_SUCCESS:
      return <MenuState>{
        ...state,
        isLoading: false,
        error: null,
        menu: action.payload,
      }
    case MENU_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
