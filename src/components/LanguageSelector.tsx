import React, {FC, SetStateAction} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";

const Style = styled.select`
   width: 4rem!important;
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