import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  margin-bottom: 60px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 40px;
    gap: 24px;
    padding: 16px 15px 0 15px;
  }
`

const AboutDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  @media(max-width: 480px){
    font-size: 14px;
    line-height: 21px;
  }
`

const DescriptionLine = styled.span`

`
const DescriptionLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const AboutMap = styled.div`
  //TOOD temporary 
  width: 100%;
  height: 405px;
  background-color: red;
  @media(max-width: 480px){
    height: 225px;
  }
`

const AboutTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: -5px;
  }
`

export {
  AboutWrapper,
  AboutDescription,
  DescriptionLine,
  DescriptionLink,
  AboutMap,
  AboutTitle
}