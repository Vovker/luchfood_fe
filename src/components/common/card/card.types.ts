import {ReactNode} from "react";

export interface ICardImgProps {
  image: string,
  width: number,
  height: number
}

export interface ICardWrapperProps{
  width: string
}

export interface ICardProps {
  imgUrl:string,
  width:number,
  height: number,
  children: ReactNode
}
