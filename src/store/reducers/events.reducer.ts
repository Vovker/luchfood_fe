import {EventsState, EventTyped} from "../types/events.types";
import {ActionWithPayload} from "../types/index.types";


const initialState: EventsState = {
  events: [],
  error: null,
  isLoading: false,
}

export const eventsReducer = (state = initialState, action: ActionWithPayload<EventTyped[]>): EventsState => {
  switch (action.type) {
    case 'EVENTS_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'EVENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        events: action.payload,
      }
    case 'EVENTS_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}

export const eventsByIdReducer = (state = initialState, action: ActionWithPayload<EventTyped>): EventsState => {
  switch (action.type) {
    case 'EVENT_BY_ID_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'EVENT_BY_ID_SUCCESS':
      return {
        isLoading: false,
        error: null,
        events: [action.payload],
      }
    case 'EVENT_BY_ID_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}
