import styled from "styled-components/macro";
import {FilterOptionStyle} from "./corners.types";
import {CardImg} from "../common/card/styled";


const CornerWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    padding-top: 20px;
    margin-bottom: 48px;
    align-items: center;
  }
`

const CornerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 31px;
  height: 50px;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    height: fit-content;
    gap: 20px;
    width: 100%;
    padding: 0 15px;
  }
`

const CornerHeaderTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`

const CornerFilter = styled.div`
  display: flex;
  gap: 25px;
  width: fit-content;
  
  @media (max-width: 480px) {
    gap: 42px;
    margin-bottom: 20px;
    overflow-x: auto;
    width: 100%;
  }
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
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  
  @media (max-width: 480px) {
    padding: 6px 15px 6px 14px;
  }
`

const CornerCardRow = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 980px;

  @media (max-width: 480px) {
    gap: 30px;
    width: 100%;
  }
`

const CornerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  
  @media (max-width: 480px) {
    padding: 0 15px;
    width: 100%;
  }
`

const MobileCornerItemDescription = styled.div`
  height: 75px;
  width: 690px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    height: 42px;
    width: 100%;
    font-size: 14px;
    line-height: 21px;
  }
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

const CornerCardImage = styled(CardImg)`
  width: 300px;
  height: 230px;
`

const MobileCornerCardImage = styled.img`
  width: 100%;
  min-width: 100%;
`

export {
  CornerHeader,
  CornerTitle,
  CornerAddress,
  CornerDescription,
  CornerFilter,
  FilterOption,
  OptionLabel,
  CornerWrapper,
  CornerHeaderTitle,
  CornerCardRow,
  CornerCardWrapper,
  CornerCardImage,
  MobileCornerCardImage,
  MobileCornerItemDescription
}
