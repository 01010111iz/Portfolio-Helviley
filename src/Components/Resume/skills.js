import styled from "styled-components";
import Bootstrap from "./progressBarBootstrap";
import Css from "./progressBarCss";
import Html from "./progressBarHTML";
import Java from "./progressBarJava";
import Js from "./progressBarJS";
import NodeJS from "./ProgressBarNodeJS";
import Python from "./progressBarPython";
import ReactJS from "./ProgressBarReactJS";
import Ts from "./progressBarTS";

const MySkills = styled.h1`
  color: #fff;
  display: flex;
  font-size: 35px;
  margin: 0.5rem 5rem;
`;
const DivContainer = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -0.5);
  margin-left: calc(var(--bs-gutter-x) * 2.5);
`;

function Skills() {
  return (
    <>
      <MySkills>Minhas Habilidades</MySkills>
      <DivContainer>
        <Html />
        <Css />
        <Js />
        <ReactJS />
        <Bootstrap />
        <NodeJS />
        <Java />
        <Ts />
        <Python />
      </DivContainer>
    </>
  );
}
export default Skills;
