import {CORNERS_FAILURE, CORNERS_REQUEST, CORNERS_SUCCESS} from "../types/corners.types";
import axios from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import {endpoints} from "../endpoints";

export function getCorners(): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: CORNERS_REQUEST});
    axios.get(endpoints.getCorners()).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: CORNERS_SUCCESS, payload: data});
      }
    } , (error) => {
      dispatch({type: CORNERS_FAILURE, payload: error});
    });
  }
}

export function getCornerById(id: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: CORNERS_REQUEST});
    axios.get(endpoints.getCornerById(id)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: CORNERS_SUCCESS, payload: data});
      }
    } , (error) => {
      dispatch({type: CORNERS_FAILURE, payload: error});
    });
  }
}
