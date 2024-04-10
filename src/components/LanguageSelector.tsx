import React, {FC, SetStateAction} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";

const Style = styled.select`
   width: 5rem!important;

  justify-self: end;
  align-self: center;
`;

interface PropTypes {
    languageOptions: string[],
    activeLanguage: languagesTypes,
    setActiveLanguage: React.Dispatch<SetStateAction<languagesTypes>>
}

const LanguageSelector: FC<PropTypes> = (
    {
        languageOptions,
        setActiveLanguage,
        activeLanguage
    }) => {
    return (
        <Style className={'languageSelector primarySelect'}
               defaultValue={activeLanguage}
               onChange={e => setActiveLanguage(e.target.value as languagesTypes)}>
            {languageOptions.map(language => {
                return <option value={language}>{language}</option>
            })}
        </Style>
    )
};
export default LanguageSelector;