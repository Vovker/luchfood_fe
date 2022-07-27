import React from "react";
import {ICardRowProps} from "./cardRow.types";
import { RowWrapper } from "./styled";

export const CardRow:React.FC<ICardRowProps> = ({children, itemsPerRow}) => {
  return (
    <RowWrapper itemsPerRow={itemsPerRow}>
      {children}
    </RowWrapper>
  )
}