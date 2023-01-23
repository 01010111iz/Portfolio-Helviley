import styled from "styled-components";
import Picture from "../../Img/IMG_0499.jpg";
const TextTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 35px;
  color: #fff;
  margin-left: 5rem;
  margin-top: 5rem;
`;
const Name = styled.span`
  color: #a400ff;
  margin: 0 10px;
`;
const TextImgContainer = styled.div`
display: flex;
justify-content: space-around;
`;
const Text = styled.p`
  display: flex;
  text-align: justify;
  color: #ffffff9a;
  width: 757px;
  box-sizing: border-box;
  height: auto;
  margin-left: 30px;
`;
const MyPicture = styled.img`
width: auto;
height: 230px;
margin: 43px 95px;
border: 2px double white;
border-radius: 50%;
`;

function AboutMe() {
  return (
    <>
      <TextTitle>
        Sou <Name>Helviley Lacerda,</Name> um desenvolvedor Full Stack.
      </TextTitle>
      <TextImgContainer>
        <Text>
          Tenho 25 anos, moro em Betim, MG. <br /> Respirar e ouvir música são
          duas coisas que, para mim, andam juntas. Além disso, gosta de ler
          livros de ação, aventura, suspense, terror e afins, assistir anime e
          tudo que é relacionado à cultura geek… <br /> Sou super organizado em
          relação a minha rotina e gosto de ter sempre um planejamento para
          minhas atividades.
          <br />
          Para curiosidade de todos, a origem do meu nome se dá pela junção do
          nome dos meus pais Shirley e Helvecio, sou o filho do meio, irmão da
          Gylse e da Vitória e namorado da Aninha. <br />
          Sou bastante curioso, gosto de buscar informações válidas sobre
          diversos assuntos e estar a par dos acontecimentos do mundo. <br />
          No âmbito profissional, ajudo a encontrar e resolver os problemas
          propostos. Atentando sempre aos menores detalhes e apresentando uma
          resolução de forma prática, criativa e inovadora.
        </Text>
        <MyPicture
          src={Picture}
          alt="Sou pardo, estou sorrindo usando uma blusa verde em um fundo verde e dourado"
        />
      </TextImgContainer>
    </>
  );
}
export default AboutMe;
