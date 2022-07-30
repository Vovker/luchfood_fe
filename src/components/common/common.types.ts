import {IsDesktop} from "./types/index.types";

export interface IWrapperProps {
  width: number,
  paddingTop?: number,
  marginBottom?: number
}

export interface ElementWithGap extends IsDesktop{
  gap?: number
}


export interface IItemWrapper {
  isDesktop?: boolean
}