const GALLERY_SUCCESS = 'GALLERY_SUCCESS';
const GALLERY_FAILURE = 'GALLERY_FAILURE';
const GALLERY_REQUEST = 'GALLERY_REQUEST';

export {
  GALLERY_SUCCESS,
  GALLERY_FAILURE,
  GALLERY_REQUEST,
}

export type GalleryTyped = {
  id: number;
  img: string;
  created_at: Date;
}

export interface GalleryState {
  gallery: GalleryTyped[];
  error: any;
  isLoading: boolean;
}
