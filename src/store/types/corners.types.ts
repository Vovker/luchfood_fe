import {KitchenTypeTyped} from "./kitchenTypes.types";

const CORNERS_REQUEST = 'CORNERS_REQUEST';
const CORNERS_SUCCESS = 'CORNERS_SUCCESS';
const CORNERS_FAILURE = 'CORNERS_FAILURE';

export {
  CORNERS_REQUEST,
  CORNERS_SUCCESS,
  CORNERS_FAILURE,
}



export type CornersTyped = {
  kitchenType: any;
  id: number;
  name: string;
  description: string;
  mainImage: string;
  logo: string;
  address: string;
  instagram: string | null;
  type: KitchenTypeTyped;
}

export type CornersState = {
  corners: CornersTyped[];
  error: any;
  isLoading: boolean;
}

export type CornerState = {
  corner: CornersTyped | null;
  error: any;
  isLoading: boolean;
}
