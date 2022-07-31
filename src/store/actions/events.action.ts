import {endpoints} from "../endpoints";
import axios from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import {
  EVENT_BY_ID_FAILURE,
  EVENT_BY_ID_REQUEST,
  EVENT_BY_ID_SUCCESS,
  EVENTS_FAILURE,
  EVENTS_REQUEST,
  EVENTS_SUCCESS
} from "../types/events.types";

export function getEvents(amount: number, lastId: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: EVENTS_REQUEST});
    axios.get(endpoints.getEvents(amount, lastId)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: EVENTS_SUCCESS, payload: data});
      }
    }, (error) => {
      dispatch({type: EVENTS_FAILURE, payload: error});
    });
  }
}

export function getEventById(id: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: EVENT_BY_ID_REQUEST});
    axios.get(endpoints.getEventById(id)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: EVENT_BY_ID_SUCCESS, payload: data});
      }
    }, (error) => {
      dispatch({type: EVENT_BY_ID_FAILURE, payload: error});
    });
  }
}
