import {FC} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import restaurantData from '../dataset/restaurantData.json';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  .logoImage{
    width: 6rem;
  }
  span{
    text-align: center;
  }
`;

interface PropTypes {
    activeLanguage: languagesTypes,
}

const Logo: FC<PropTypes> = ({activeLanguage}) => {
    return (
        <Style >
            <img className={'logoImage'} src="/bibi-persian-restaurant.webp" alt="logo"/>
            <span>{restaurantData.name[activeLanguage]}</span>

        </Style>
    )
};
export default Logo;