import styled from "styled-components";
import {FilterOptionStyle} from "./corners.types";
import {IsDesktop} from "../common/types/index.types";

const CornerHeader = styled.div<IsDesktop>`
  display: flex;
  flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
  justify-content: ${props => props.isDesktop ? 'space-between' : 'center'};
  align-items: ${props => props.isDesktop ? 'flex-end' : 'center'};
  margin-bottom: ${props => props.isDesktop ? '31px' : '0'};
  height: ${props => props.isDesktop ? '50px' : 'fit-content'};
  gap: ${props => props.isDesktop ? '0' : '20px'};
  width: ${props => props.isDesktop ? '100%' : '345px'};
`

const CornerFilter = styled.div<IsDesktop>`
  display: flex;
  gap: ${props => props.isDesktop ? '25px' : '42px'};
  margin-bottom: ${props => props.isDesktop ? '0' : '20px'};
  width: ${props => props.isDesktop ? 'fit-content' : '100%'};
  overflow-x: scroll;
`

const FilterOption = styled.input`
  appearance: none;
`

const OptionLabel = styled.label<FilterOptionStyle>`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  background-color: ${props => props.isChecked ? props.theme.colors.white : 'inherit'};
  padding: ${props => props.isMobile ? '6px 15px 6px 14px' : '4px 11px'};
`

const CornerTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`

const CornerAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 3px;
`

const CornerDescription = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`

export {
  CornerHeader,
  CornerTitle,
  CornerAddress,
  CornerDescription,
  CornerFilter,
  FilterOption,
  OptionLabel
}