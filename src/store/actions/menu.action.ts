import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {MENU_FAILURE, MENU_REQUEST, MENU_SUCCESS} from "../types/menu.types";
import {endpoints} from "../endpoints";

export function getMenuByCornerId(id: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: MENU_REQUEST});
    axios.get(endpoints.getMenuByCornerId(id)).then(response => {
        const {data} = response.data;
        if (response.data) {
          dispatch({type: MENU_SUCCESS, payload: data});
        }
      }, (error) => {
        dispatch({type: MENU_FAILURE, payload: error});
      }
    )
  }
}
