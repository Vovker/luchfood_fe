import {GalleryState, GalleryTyped} from "../types/gallery.types";
import {ActionWithPayload} from "../types/index.types";
import _ from "lodash";

const initialState: GalleryState = {
  gallery: [],
  error: null,
  isLoading: false,
  isMore: true,
}

export const galleryReducer = (state = initialState, action: ActionWithPayload<GalleryTyped[]>): GalleryState => {
  switch (action.type) {
    case 'GALLERY_REQUEST':
      return {
        ...state,
        isLoading: true,
        isMore: true,
      }
    case 'GALLERY_SUCCESS':
      return<GalleryState> {
        ...state,
        isLoading: false,
        error: null,
        gallery: _.unionBy(state.gallery, action.payload, 'id'),
        isMore: action.payload.length !== 0,
      }
    case 'GALLERY_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isMore: false,
      }
    default:
      return state;
  }
}
