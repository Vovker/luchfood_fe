const NEWS_SUCCESS = 'NEWS_SUCCESS';
const NEWS_FAILURE = 'NEWS_FAILURE';
const NEWS_REQUEST = 'NEWS_REQUEST';

const NEWS_BY_ID_SUCCESS = 'NEWS_BY_ID_SUCCESS';
const NEWS_BY_ID_FAILURE = 'NEWS_BY_ID_FAILURE';
const NEWS_BY_ID_REQUEST = 'NEWS_BY_ID_REQUEST';

export {
  NEWS_SUCCESS,
  NEWS_FAILURE,
  NEWS_REQUEST,
  NEWS_BY_ID_SUCCESS,
  NEWS_BY_ID_FAILURE,
  NEWS_BY_ID_REQUEST,
}

export type NewsTyped = {
  id: number;
  title: string;
  description: string;
  img: string;
  created_at: Date;
}

export interface NewsState {
  news: NewsTyped[];
  error: any;
  isLoading: boolean;
}
