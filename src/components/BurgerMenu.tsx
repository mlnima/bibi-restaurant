import {FC, useState} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import burgerMenuData from '../dataset/burgerMenuData.json'
import { Link } from "react-router-dom";

const Style = styled.div`
    .openCloseBurgerMenuBtn{
      svg{
        width: 2rem;
        height: 2rem;
      }
    }
  .menuItems{
    flex-direction: column;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: var(--primary-active-color);
    .menuItem{
      color: var(--primary-background-color);
      display: inline-block;
      font-weight: bold;
      //font-size: 1rem;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding: .375rem;
      line-height: 1.5;
      border-radius: .25rem;
      cursor: pointer;
    }
  }
  
  @media only screen and (min-width: 768px){
    .openCloseBurgerMenuBtn{
      display: none;
    }
    .menuItems{
      display: flex;
      flex-direction: row;
      position: initial;
      //gap: 1rem;
    }
  }
    
`;

interface PropTypes {
    activeLanguage: languagesTypes,
}

declare type menuItem={
    name:{
        [key : string] : string
    },
    url:string
}

const BurgerMenu: FC<PropTypes> = ({activeLanguage}) => {
    const [isOpen,setIsOpen] = useState<boolean>(true)

    return (
        <Style>
            <button className={'openCloseBurgerMenuBtn btn btn-transparent'}
                    onClick={()=>setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={'menuItems'} style={{display:isOpen? 'flex':'none'}}>
                {burgerMenuData.items.map((item:menuItem)=>{
                    return <Link className={'menuItem'} to={item.url}>
                        {item.name[activeLanguage]}
                    </Link>
                })}
            </div>

        </Style>
    )
};
export default BurgerMenu;