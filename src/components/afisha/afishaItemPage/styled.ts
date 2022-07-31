import styled from "styled-components";
import {IsDesktop} from "../../common/types/index.types";


const InfoDate = styled.div<IsDesktop>`
  width: fit-content;
  padding: ${props => props.isDesktop ? '8px' : '6px 14px'};
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.isDesktop ? '22px' : '14px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '32px' : '20px'};
`

const InfoCategory = styled.div<IsDesktop>`
  font-size: ${props => props.isDesktop ? '22px' : '16px'};
  font-weight: 600;
  line-height: ${props => props.isDesktop ? '32px' : '24px'};
`

const InfoDescription = styled.div<IsDesktop>`
  font-size: ${props => props.isDesktop ? '18px' : '14px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '25px' : '21px'};
`

const MobileCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export {
  InfoDate,
  InfoCategory,
  InfoDescription,
  MobileCategoryWrapper
}
