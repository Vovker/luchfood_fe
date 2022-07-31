import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {newsByIdReducer, newsReducer} from "./reducers/news.reducer";
import {eventsByIdReducer, eventsReducer} from "./reducers/events.reducer";
import {galleryReducer} from "./reducers/gallery.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  currentNews: newsByIdReducer,
  events: eventsReducer,
  currentEvent: eventsByIdReducer,
  gallery: galleryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

