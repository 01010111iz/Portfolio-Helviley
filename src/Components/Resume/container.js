import styled from "styled-components";
import CardHardSkill from "./CardHardSkill";
import Cards from "./cards";
import Skills from "./skills"

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 60vh;
  margin-top: 2rem;
`;
const SoftSkills = styled.div`
  color: #fff;
  width: 50%;
  display: flex;
  justify-content: center;
  font-size: 35px;
`;
const HardSkills = styled.div`
color: #fff;
width: 50%;
display: flex;
justify-content: center;
font-size: 35px;
`;
function ResumeContainer() {
  return (
    <>
      <Container>
        <SoftSkills>
            Meus Estudos
            <Cards/>
        </SoftSkills>
        <HardSkills>
            Minhas Experiências
            <CardHardSkill />    
        </HardSkills>
      </Container>
        <Skills>
          Minhas Habilidades
        </Skills>
    </>
  );
}
export default ResumeContainer;
