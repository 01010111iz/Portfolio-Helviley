import Container from "../Content/Container";
import Title from "../Title";
import UpperTitle from "../UpperTItle";
import UpperTitleBar from "../UpperTItle/UpperTitleBar";
import logo from "../../Img/LogoHelviley.svg";
import linkedin from "../../Img/linkedin.png";
import github from "../../Img/github.png";
import whatsapp from "../../Img/whatsapp.png";
import email from "../../Img/email.png";
import styled from "styled-components";
import Header from "../Header";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.3;
  }
`;
const ImageLogo = styled.img`
  width: 160px;
  height: 100px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.3;
  }
`;
const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 10%;
  cursor: pointer;
`;

function Contact() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          Meus Contatos
          <UpperTitle>Para falar comigo:</UpperTitle>
          <UpperTitleBar />
        </Title>
        <ContainerImg>
          <Link to="/">
            <ImageLogo src={logo} alt="Logo" />
          </Link>
          <a
            href="https://www.linkedin.com/in/helviley-lacerda-2253a2115/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedin} alt="logo linkedin" />
          </a>
          <a
            href="https://github.com/01010111iz"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={github} alt="logo github" />
          </a>
          <a
            href="https://wa.me/5531995296713"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={whatsapp} alt="whatsapp" />
          </a>
          <a
            href="mailto:helviley.melo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={email} alt="whatsapp" />
          </a>
        </ContainerImg>
      </Container>
    </>
  );
}
export default Contact;
