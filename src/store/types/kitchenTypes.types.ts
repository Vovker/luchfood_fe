const KITCHEN_TYPES_REQUEST = 'KITCHEN_TYPES_REQUEST';
const KITCHEN_TYPES_SUCCESS = 'KITCHEN_TYPES_SUCCESS';
const KITCHEN_TYPES_FAILURE = 'KITCHEN_TYPES_FAILURE';

export {
  KITCHEN_TYPES_REQUEST,
  KITCHEN_TYPES_SUCCESS,
  KITCHEN_TYPES_FAILURE,
}

export type KitchenTypeTyped = {
  id: number,
  name: string,
}

export type KitchenTypeState = {
  kitchenType: KitchenTypeTyped[],
  error: any,
  isLoading: boolean,
}
