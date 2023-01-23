import styled from "styled-components";

const Card = styled.span`
  display: flex;
  position: relative;
  top: 4rem;
  right: 19.5rem;
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
const Office = styled.h3`
  font-size: 20px;
  margin-left: 8px;
`;
const Company = styled.h6`
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

function CardHardSkill() {
  return (
    <>
      <Card>
        <Period>2022 - atual</Period>
        <Office>Estagiário de Desenvolvimento</Office>
        <Company>Tora Transportes</Company>
        <Description>
          <strong>Atividades desenvolvidas: </strong>
          Atuação em sistemas, com desenvolvimento inicial de um CRUD;
          Desenvolvimento de um E-commerce automotivo utilizando as tecnologias
          HTML, CSS, JavaScript, React.JS, Node.JS, banco de dados SQL; Atuação
          em suporte de primeiro nível atendendo e avaliando chamados de todos
          os setores da empresa.
        </Description>
      </Card>
    </>
  );
}
export default CardHardSkill;
