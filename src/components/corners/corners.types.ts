import {IsDesktop} from "../common/types/index.types";

export interface CornersTypes {
  image: string,
  name: string,
  address: string,
  description: string,
  url: string,
  category?: string
}

export interface IFilterOption {
  value: string,
  name: string,
  title: string
}

export interface FilterOptionStyle extends IsDesktop{
  isChecked?: boolean
}