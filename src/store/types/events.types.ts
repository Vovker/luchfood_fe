const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
const EVENTS_FAILURE = 'EVENTS_FAILURE';
const EVENTS_REQUEST = 'EVENTS_REQUEST';

const EVENT_BY_ID_SUCCESS = 'EVENT_BY_ID_SUCCESS';
const EVENT_BY_ID_FAILURE = 'EVENT_BY_ID_FAILURE';
const EVENT_BY_ID_REQUEST = 'EVENT_BY_ID_REQUEST';

export {
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  EVENTS_REQUEST,
  EVENT_BY_ID_SUCCESS,
  EVENT_BY_ID_FAILURE,
  EVENT_BY_ID_REQUEST,
}

export type EventTyped = {
  id: number;
  name: string;
  description: string;
  img: string;
  date: Date;
  type: EventTypeTyped;
}

export type EventTypeTyped = {
  id: number;
  name: string;
}

export interface EventsState {
  events: EventTyped[];
  error: any;
  isLoading: boolean;
  isMore: boolean;
}

export interface EventByIdState {
  event: EventTyped | null;
  error: any;
  isLoading: boolean;
}
