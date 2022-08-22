const KITCHEN_TYPES_REQUEST = 'KITCHEN_TYPES_REQUEST';
const KITCHEN_TYPES_SUCCESS = 'KITCHEN_TYPES_SUCCESS';
const KITCHEN_TYPES_FAILURE = 'KITCHEN_TYPES_FAILURE';
const KITCHEN_TYPES_SELECT = 'KITCHEN_TYPES_SELECT';

export {
  KITCHEN_TYPES_REQUEST,
  KITCHEN_TYPES_SUCCESS,
  KITCHEN_TYPES_FAILURE,
  KITCHEN_TYPES_SELECT
}

export type KitchenTypeTyped = {
  id: number,
  name: string,
}

export type KitchenTypeState = {
  kitchenType: KitchenTypeTyped[],
  selectedKitchenType: number,
  error: any,
  isLoading: boolean,
}
