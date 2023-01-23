import styled from "styled-components";
import backgroundContent from "../../Img/backgroundContent.jpeg";
import Header from "../Header";

const ContentContainer = styled.div`
  background-image: url(${backgroundContent});
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`;
const Title = styled.h2`
  color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 15%;
  font-weight: 700;
  font-size: 45px;
`;
const Subtitle = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 75px;
`;
const Text = styled.h3`
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
const SubText = styled.h5`
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
function Content() {
  return (
    <>
      <Header />
      <ContentContainer>
        <Title>Bem-vindo.</Title>
        <Subtitle>Sou Helviley Lacerda!</Subtitle>
        <Text>Programador Full Stack.</Text>
        <SubText>Sitiado em Betim, Minas Gerais.</SubText>
      </ContentContainer>
    </>
  );
}
export default Content;
