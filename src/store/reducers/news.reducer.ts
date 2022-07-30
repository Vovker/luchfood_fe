import {NewsState, NewsTyped} from "../types/news.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: NewsState = {
  news: [],
  isLoading: false,
}

export const newsReducer = (state = initialState, action: ActionWithPayload<NewsTyped[]>): NewsState => {
  switch (action.type) {
    case 'NEWS_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'NEWS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        news: action.payload,
      }
    case 'NEWS_FAILURE':
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}

