import styled from "styled-components";
import { Link } from "react-router-dom"

const Options = styled.ul`
  display: flex;
`;
const Option = styled.li`
  button {
    min-width: 100px;
    height: auto;
    display: flex;
    justify-content: center;
    font-size: 15px;
    padding: 2px 4px;
    cursor: pointer;
    align-itens: center;
    margin-top: 7.3px;
    border: none;
    background: transparent;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.3;
    }
  }
`;

function OptionsHeader() {
  return (
    <>
      <Options>
        <Option>
            <Link to="/">
          <button>Página principal</button>
            </Link>
        </Option>
          <Option>
            <Link to="/About/index">
          <button>Sobre mim</button>
            </Link>
        </Option>
          <Option>
            <Link to="/Components/Resume/index">
          <button>Resumo</button>
            </Link>
        </Option>
          <Option>
          <Link to="/Components/Contact/index">
          <button>Contato</button>
          </Link>
        </Option>
      </Options>
    </>
  );
}
export default OptionsHeader;
