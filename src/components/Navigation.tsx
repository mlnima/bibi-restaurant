import React, {FC, SetStateAction} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import LanguageSelector from "./LanguageSelector";
import BurgerMenu from "./BurgerMenu";

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem .5rem;
  box-sizing: border-box;
  background-color: var(--primary-active-color);
  color: var(--primary-background-color);
`;

interface PropTypes {
    languageOptions: string[],
    activeLanguage: languagesTypes,
    setActiveLanguage: React.Dispatch<SetStateAction<languagesTypes>>
}

const Navigation: FC<PropTypes> = (
    {
        languageOptions,
        setActiveLanguage,
        activeLanguage
    }) => {
    return (
        <Style>
            <BurgerMenu activeLanguage={activeLanguage}/>
            <LanguageSelector languageOptions={languageOptions}
                              setActiveLanguage={setActiveLanguage}
                              activeLanguage={activeLanguage}/>
        </Style>
    )
};
export default Navigation;