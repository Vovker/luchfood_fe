import {GalleryState, GalleryTyped} from "../types/gallery.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: GalleryState = {
  gallery: [],
  error: null,
  isLoading: false,
}

export const galleryReducer = (state = initialState, action: ActionWithPayload<GalleryTyped[]>): GalleryState => {
  switch (action.type) {
    case 'GALLERY_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GALLERY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        gallery: action.payload,
      }
    case 'GALLERY_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
