import {EventByIdState, EventsState, EventTyped} from "../types/events.types";
import {ActionWithPayload} from "../types/index.types";
import _ from "lodash";


const initialState: EventsState = {
  events: [],
  error: null,
  isLoading: false,
  isMore: true,
}

export const eventsReducer = (state = initialState, action: ActionWithPayload<EventTyped[]>): EventsState => {
  switch (action.type) {
    case 'EVENTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isMore: true,
      }
    case 'EVENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        events: _.unionBy(state.events, action.payload, 'id'),
        isMore: action.payload.length !== 0,
      }
    case 'EVENTS_FAILURE':
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

const initialStateEventById: EventByIdState = {
  event: null,
  error: null,
  isLoading: false,
}

export const eventsByIdReducer = (state = initialStateEventById, action: ActionWithPayload<EventTyped>): EventByIdState => {
  switch (action.type) {
    case 'EVENT_BY_ID_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case 'EVENT_BY_ID_SUCCESS':
      return {
        isLoading: false,
        error: null,
        event: action.payload,
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
