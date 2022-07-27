import React from "react";
import {CardImg, CardWrapper} from "./styled";
import {ICardProps} from "./card.types";


export const Card:React.FC<ICardProps> = ({imgUrl, children, width, height, style}) => {
  return(
    <CardWrapper width={`${width}px`} style={style}>
      <CardImg
        image={imgUrl}
        width={`${width}px`}
        height={`${height}px`}
      />
      {children}
    </CardWrapper>
  )
}
