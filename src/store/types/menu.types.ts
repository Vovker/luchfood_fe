const MENU_SUCCESS = 'MENU_SUCCESS';
const MENU_FAILURE = 'MENU_FAILURE';
const MENU_REQUEST = 'MENU_REQUEST';

export {
  MENU_SUCCESS,
  MENU_FAILURE,
  MENU_REQUEST,
}

export type MenuCategoryItemTyped = {
  id: number;
  name: string;
  weight: number;
  price: number;
}

export type MenuCategoryTyped = {
  id: number;
  name: string;
  menu: MenuCategoryItemTyped[];
}

export type MenuState = {
  menu: MenuCategoryTyped[];
  error: any;
  isLoading: boolean;
}
