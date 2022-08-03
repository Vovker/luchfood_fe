import {endpoints} from "../endpoints";
import axios from "axios";
import {KITCHEN_TYPES_FAILURE, KITCHEN_TYPES_REQUEST, KITCHEN_TYPES_SUCCESS} from "../types/kitchenTypes.types";
import {Dispatch} from "@reduxjs/toolkit";

export function getKitchenTypes(): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: KITCHEN_TYPES_REQUEST});
    axios.get(endpoints.getKitchenTypes()).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: KITCHEN_TYPES_SUCCESS, payload: data});
      }
    } , (error) => {
      dispatch({type: KITCHEN_TYPES_FAILURE, payload: error});
    });
  }
}
