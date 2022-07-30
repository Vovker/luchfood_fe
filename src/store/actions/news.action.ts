import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {endpoints} from "../endpoints";
import {
  NEWS_REQUEST,
  NEWS_BY_ID_FAILURE,
  NEWS_BY_ID_REQUEST,
  NEWS_BY_ID_SUCCESS,
  NEWS_FAILURE,
  NEWS_SUCCESS
} from "../types/news.types";

export function getNews(amount: number, lastId: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: NEWS_REQUEST});
    axios.get(endpoints.getNews(amount, lastId)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: NEWS_SUCCESS, payload: data});
      }

    }, (error) => {
      dispatch({type: NEWS_FAILURE, payload: error});
    });
  }
}

export function getNewsById(id: number): (dispatch: Dispatch) => void {
  return (dispatch) => {
    dispatch({type: NEWS_BY_ID_REQUEST});
    axios.get(endpoints.getNewsById(id)).then(response => {
      const {data} = response.data;
      if (response.data) {
        dispatch({type: NEWS_BY_ID_SUCCESS, payload: data});
      }

    }, (error) => {
      dispatch({type: NEWS_BY_ID_FAILURE, payload: error});
    });
  }
}
