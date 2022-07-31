import {GALLERY_FAILURE, GALLERY_REQUEST, GALLERY_SUCCESS} from "../types/gallery.types";
import axios from "axios";
import {endpoints} from "../endpoints";
import {Dispatch} from "@reduxjs/toolkit";

export function getGallery(amount: number, lastId: number): (dispatch: Dispatch) => void {
  return async (dispatch) => {
    dispatch({type: GALLERY_REQUEST});
    axios.get(endpoints.getGallery(amount, lastId)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: GALLERY_SUCCESS, payload: data});
      }
    } , (error) => {
      dispatch({type: GALLERY_FAILURE, payload: error});
    });
  }
}
