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
const SocialLinks = styled.div<IsDesktop>`
  margin-top: 18px;
  justify-content: flex-end;
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: ${props => props.isDesktop ? '0' : '40px'};
`

const SocialImg = styled.img`
  
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
  SocialLinks,
  SocialImg,
  MobileCategoryWrapper
}
