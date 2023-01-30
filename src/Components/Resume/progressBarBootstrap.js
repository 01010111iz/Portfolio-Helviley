import styled from "styled-components";
const Container = styled.div`
width: 30%;
height: 20vh;
padding: 0 10px;
`;
const ContainerTitle = styled.div`
justify-content: space-around;
display: flex;

`
const TitleProgessBar = styled.p`
  display: flex;
  font-size: 25px;
  color: #fff;
  width: auto;
  height: auto;
`;
const ProgressBarPercent = styled.span`
  display: flex;
  font-size: 25px;
  color: #fff;
  width: auto;
  height: auto;
`;
const ProgressBar = styled.div`
width: 100%;
height: 8px;
background: #000;
border-radius: 10px;
position: relative;
left: 20px;
`;
const ProgressBarResult = styled.div`
width: 45%;
height: 8px;
border-radius: 10px;
background: #a400ff;
border: 1px solid;
`
function Bootstrap (){
    return(
        <>
        <Container>
        <ContainerTitle>
        <TitleProgessBar>Bootstrap</TitleProgessBar>
        <ProgressBarPercent>45%</ProgressBarPercent>
        </ContainerTitle>
        <ProgressBar>
          <ProgressBarResult/>
        </ProgressBar>
      </Container>
        </>
    )
}
export default Bootstrap;