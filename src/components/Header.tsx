import {FC} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import Logo from "./Logo";

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;

`;

interface PropTypes {
    activeLanguage: languagesTypes,
}

const Header: FC<PropTypes> = ({activeLanguage}) => {
    return (
        <Style>
            <Logo activeLanguage={activeLanguage}/>

        </Style>
    )
};
export default Header;
