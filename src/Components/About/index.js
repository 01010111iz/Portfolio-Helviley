import Container from "../Content/Container";
import Header from "../Header";
import BackTitle from "../Title";
import UpperTitle from "../UpperTItle";
import UpperTitleBar from "../UpperTItle/UpperTitleBar";
import AboutMe from "./AboutMe";


function About() {
  return (
    <>
    <Header/>
      <Container>
        <BackTitle>
          Sobre mim
          <UpperTitle>Conheça-me mais</UpperTitle>
          <UpperTitleBar />
        </BackTitle>
        <AboutMe />
      </Container>
    </>
  );
}
export default About;
