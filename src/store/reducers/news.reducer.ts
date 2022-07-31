import {NewsState, NewsTyped} from "../types/news.types";
import {ActionWithPayload} from "../types/index.types";

const initialState: NewsState = {
  news: [],
  error: null,
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
        error: null,
        news: action.payload,
      }
    case 'NEWS_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}

export const newsByIdReducer = (state = initialState, action: ActionWithPayload<NewsTyped>): NewsState => {
  switch (action.type) {
    case 'NEWS_BY_ID_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'NEWS_BY_ID_SUCCESS':
      return {
        isLoading: false,
        error: null,
        news: [action.payload],
      }
    case 'NEWS_BY_ID_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
