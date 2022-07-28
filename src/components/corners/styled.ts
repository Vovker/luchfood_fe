import styled from "styled-components";
import {FilterOptionStyle} from "./corners.types";

const CornerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
  margin-top: 72px;
  height: 50px;
`

const CornerFilter = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 12px;
`

const FilterOption = styled.input`
  appearance: none;
`

const OptionLabel = styled.label<FilterOptionStyle>`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  background-color: ${props => props.isChecked ? props.theme.colors.white : 'inherit'};
  padding: 4px 11px;
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