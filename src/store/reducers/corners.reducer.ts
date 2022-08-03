import {
  CORNERS_FAILURE,
  CORNERS_REQUEST,
  CORNERS_SUCCESS,
  CornersState,
  CornerState,
  CornersTyped
} from "../types/corners.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: CornersState = {
  corners: [],
  isLoading: false,
  error: null,
}

export const cornersReducer = (state = initialState, action: ActionWithPayload<CornersTyped[]>): CornersState => {
  switch (action.type) {
    case CORNERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CORNERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        corners: action.payload,
      }
    case CORNERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}

const initialStateCorner: CornerState = {
  corner: null,
  isLoading: false,
  error: null,
}

export const cornersByIdReducer = (state: CornerState = initialStateCorner, action: ActionWithPayload<CornersTyped>): CornerState => {
  switch (action.type) {
    case CORNERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CORNERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        corner: action.payload,
      }
    case CORNERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
