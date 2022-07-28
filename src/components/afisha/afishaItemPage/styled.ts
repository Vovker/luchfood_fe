import styled from "styled-components";


const InfoDate = styled.div`
  width: fit-content;
  padding: 8px;
  background-color: ${props => props.theme.colors.white};
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
`

const InfoCategory = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
`

const InfoDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
`
const SocialLinks = styled.div`
  margin-top: 18px;
  justify-content: flex-end;
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
`

const SocialImg = styled.img`
  
`

export {
  InfoDate,
  InfoCategory,
  InfoDescription,
  SocialLinks,
  SocialImg
}
