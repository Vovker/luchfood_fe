import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {newsByIdReducer, newsReducer} from "./reducers/news.reducer";
import {eventsByIdReducer, eventsReducer} from "./reducers/events.reducer";
import {galleryReducer} from "./reducers/gallery.reducer";
import {kitchenTypesReducer} from "./reducers/kitchenTypes.reducer";
import {cornersByIdReducer, cornersReducer} from "./reducers/corners.reducer";
import {menuReducer} from "./reducers/menu.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  currentNews: newsByIdReducer,
  events: eventsReducer,
  currentEvent: eventsByIdReducer,
  gallery: galleryReducer,
  kitchenTypes: kitchenTypesReducer,
  corners: cornersReducer,
  corner: cornersByIdReducer,
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

