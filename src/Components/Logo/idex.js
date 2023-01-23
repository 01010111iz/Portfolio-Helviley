import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Img/LogoHelviley.svg"

const LogoContainer = styled.div`
display: flex;
font-size: 26px
`;

const ImgLogo = styled.img`
margin-right: 10px;
cursor: pointer;
height: 30px;
margin-bottom: 6px;
}
&:hover{
  opacity: .7;
}
&:active{
  opacity: .3;
}
`;


function Logo() {
  return (
    <>
      <LogoContainer>
        <Link to="/">
        <ImgLogo src={logo} alt="logo" />
        </Link>
        <p>
          <strong>Helviley</strong>Lacerda
        </p>
      </LogoContainer>
    </>
  );
}
export default Logo;
