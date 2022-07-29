import styled from "styled-components";


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AboutDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 60px;
`

export {
  AboutContainer,
  AboutDescription,
  DescriptionLine,
  DescriptionLink,
  AboutMap
}