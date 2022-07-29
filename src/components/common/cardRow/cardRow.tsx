import React from "react";
import {ICardRowProps} from "./cardRow.types";
import {RowWrapper} from "./styled";

export const CardRow: React.FC<ICardRowProps> = ({
                                                   children,
                                                   itemsPerRow,
                                                   gap,
                                                   itemWidth
                                                 }) => {
  return (
    <RowWrapper
      itemsPerRow={itemsPerRow}
      gap={gap}
      itemWidth={itemWidth}
    >
      {children}
    </RowWrapper>
  )
}