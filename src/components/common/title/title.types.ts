import {ReactNode} from "react";

export interface StyleTitleProps {
  marginBottom?: number,
  isDesktop: boolean
  align?: string,
  color?: string
}

export interface ITitleProps {
  marginBottom?: number
  children: ReactNode
  align?: string,
  color?: string
}