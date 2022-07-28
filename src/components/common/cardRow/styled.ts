import styled from "styled-components";
import {RowWrapperProps} from "./cardRow.types";


const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  width: ${props => (props.itemsPerRow*300)+((props.itemsPerRow-1)*40)+'px'};
`

export {
  RowWrapper
}