import {FC} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import restaurantData from '../dataset/restaurantData.json';
import { Link } from "react-router-dom";

const Style = styled.div`
  .logoLink{
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
  }


`;

interface PropTypes {
    activeLanguage: languagesTypes,
}

const Logo: FC<PropTypes> = ({activeLanguage}) => {
    return (
        <Style >
            <Link to={'/'} className={'logoLink'}>
                <img className={'logoImage'} src={`${process.env.PUBLIC_URL}/bibi-persian-restaurant.webp`} alt="logo"/>
                <span>{restaurantData.name[activeLanguage]}</span>
            </Link>
        </Style>
    )
};
export default Logo;