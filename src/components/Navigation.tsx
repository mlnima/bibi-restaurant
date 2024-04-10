import React, {FC, SetStateAction} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import LanguageSelector from "./LanguageSelector";
import BurgerMenu from "./BurgerMenu";
import days from "../dataset/days.json";
import restaurantData from '../dataset/restaurantData.json';

const Style = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  //justify-content: space-between;
  align-items: center;
 
  padding: .5rem .5rem;
  box-sizing: border-box;
  background-color: var(--primary-active-color);
  color: var(--primary-background-color);
  .openingHoursToday{
    justify-self: center;
    align-self: center;
  }
`;

interface PropTypes {
    languageOptions: string[],
    activeLanguage: languagesTypes,
    setActiveLanguage: React.Dispatch<SetStateAction<languagesTypes>>
    today:number
}

const Navigation: FC<PropTypes> = (
    {
        languageOptions,
        setActiveLanguage,
        activeLanguage,
        today
    }) => {
    return (
        <Style>
            <BurgerMenu activeLanguage={activeLanguage}/>
            <div className={'openingHoursToday'}>
                {/*{days[today].name[activeLanguage]}:*/}
                {/*//@ts-ignore*/}
                {restaurantData.workingHours[today].hours}
            </div>
            <LanguageSelector languageOptions={languageOptions}
                              setActiveLanguage={setActiveLanguage}
                              activeLanguage={activeLanguage}/>
        </Style>
    )
};
export default Navigation;