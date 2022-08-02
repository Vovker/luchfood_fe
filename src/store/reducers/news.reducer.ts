import {NewsByIdState, NewsByIdTyped, NewsState, NewsTyped} from "../types/news.types";
import {ActionWithPayload} from "../types/index.types";
import _ from "lodash";

const initialState: NewsState = {
  news: [],
  error: null,
  isLoading: false,
  isMore: true,
}

export const newsReducer = (state = initialState, action: ActionWithPayload<NewsTyped[]>): NewsState => {
  switch (action.type) {
    case 'NEWS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isMore: true,
      }
    case 'NEWS_SUCCESS':
      return <NewsState>{
        ...state,
        isLoading: false,
        error: null,
        news: _.unionBy(state.news, action.payload, 'id'),
        isMore: action.payload.length !== 0,
      }
    case 'NEWS_FAILURE':
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

const newsByIdInitialState: NewsByIdState = {
  news: null,
  error: null,
  isLoading: false,
}

export const newsByIdReducer = (state = newsByIdInitialState, action: ActionWithPayload<NewsByIdTyped>): NewsByIdState => {
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
        news: action.payload,
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
