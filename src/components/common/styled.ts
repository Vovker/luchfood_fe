import styled from "styled-components";

const SocialLinks = styled.div`
  margin-top: 18px;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  @media(max-width: 480px){
    gap: 14px;
    font-size: 12px;
    line-height: 17px;
  }
`

const SocialImg = styled.img`
  
`


const StyledDate = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  @media(max-width: 480px){
    font-size: 14px;
  }
`

export {
  StyledDate,
  SocialLinks,
  SocialImg
}