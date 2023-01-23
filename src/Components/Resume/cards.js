import styled from "styled-components";

const Card = styled.span`
  display: flex;
  position: relative;
  top: 4rem;
  right: 13.5rem;
  border-radius: 25px 65px;
  flex-flow: column;
  height: 17.5rem;
  width: 25rem;
  background: #171717;
`;
const Period = styled.span`
  font-size: 18px;
  width: auto;
  margin: 5px 40px;
  color: #a400ff;
`;
const CourseName = styled.h3`
  font-size: 20px;
  margin-left: 8px;
`;
const CollegeName = styled.h6`
  font-size: 15px;
  color: #a400ff;
  margin-left: 15px;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 15px;
  color: #ffffffaf;
  text-align: justify;
  margin: 0 17px;
`;

function Cards() {
  return (
    <>
      <Card>
        <Period>2022 - atual</Period>
        <CourseName>Análise e Desenvolvimento de Sistemas</CourseName>
        <CollegeName>Faculdade Descomplica</CollegeName>
        <Description>
          <strong>Matérias aprendidas até o momento: </strong>
          Criação e Aplicações de sistemas, Desing de Software, Estrutura de
          Dados para Sistemas Inteligentes, Gerenciamento Avançado de Projetos,
          Metodologia de Desenvolvimento de Software, Desenvolvimento Mobile.
        </Description>
      </Card>
    </>
  );
}
export default Cards;
