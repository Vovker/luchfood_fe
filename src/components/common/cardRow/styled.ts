import styled from "styled-components";
import {RowWrapperProps} from "./cardRow.types";


const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  gap: ${props => props.gap ? props.gap + 'px' : '40px'};
  flex-wrap: wrap;
  justify-content: flex-start;
  width: ${props =>
          (props.itemsPerRow * (props.itemWidth ? props.itemWidth : 300)) +
          ((props.itemsPerRow - 1) * (props.gap ? props.gap : 40)) + 'px'};
`

export {
  RowWrapper
}