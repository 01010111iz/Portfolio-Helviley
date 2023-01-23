import LinkedIn from "../../Img/linkedin.png";
import GitHub from "../../Img/github.png";
import styled from "styled-components";

const Icons = styled.ul`
  display: flex;
`;
const Icon = styled.img`
  margin-right: 40px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-itens: center;
  width: 25px;
  height: 25px;
`;

function IconsHeader() {
  return (
    <>
      <Icons>
        <a
          href="https://www.linkedin.com/in/helviley-lacerda-2253a2115/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon src={LinkedIn} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/01010111iz"
          target="_blank"
          rel="noreferrer"
        >
          <Icon src={GitHub} alt="GitHub" />
        </a>
      </Icons>
    </>
  );
}
export default IconsHeader;
