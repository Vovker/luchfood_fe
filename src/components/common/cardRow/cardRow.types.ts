import {ReactNode} from "react";

export interface ICardRowProps extends RowWrapperProps{
  children: ReactNode
}

export interface RowWrapperProps {
  itemsPerRow: number,
  gap?: number,
  itemWidth?: number
}