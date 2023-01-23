import styled from "styled-components";
import AlternativeContainer from "../Content/Container/alternativeContainer";
import Header from "../Header";
import Title from "../Title";
import UpperTitleBar from "../UpperTItle/UpperTitleBar";
import ResumeContainer from "./container";
const UpperTitle = styled.h3`
  position: absolute;
  top: 73px;
  right: 43rem;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
`;

function Resume() {
  return (
    <>
    <Header/>
      <AlternativeContainer>
        <Title>
          Resumo
          <UpperTitle>Síntese</UpperTitle>
          <UpperTitleBar />
        </Title>
        <ResumeContainer />
      </AlternativeContainer>
    </>
  );
}
export default Resume;
