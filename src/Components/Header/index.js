import styled from "styled-components";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo/idex";
import OptionsHeader from "../OptionsHeader";

const HeaderContainer= styled.header`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 100vw;
    background: linear-gradient(45deg, #ffe3fbb8 45%, #cd00caa3);
    overflow-x: hidden;
}
`;

function Header(){
    return(
        <>
        <HeaderContainer>
            <Logo />
            <OptionsHeader/>
            <IconsHeader />
        </HeaderContainer>
        </>
    )
}
export default Header;