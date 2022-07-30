import React from "react";
import {CardImg, CardWrapper} from "./styled";
import {ICardProps} from "./card.types";


export const Card:React.FC<ICardProps> = ({imgUrl, children, width, height}) => {
  return(
    <CardWrapper width={`${width}px`}>
      <CardImg
        image={imgUrl}
        width={width}
        height={height}
      />
      {children}
    </CardWrapper>
  )
}
