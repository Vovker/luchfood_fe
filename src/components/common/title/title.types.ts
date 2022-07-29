import {ReactNode} from "react";

export interface StyleTitleProps {
  marginBottom?: number,
  isDesktop: boolean
  align?: string
}

export interface ITitleProps {
  marginBottom?: number
  children: ReactNode
  align?: string
}