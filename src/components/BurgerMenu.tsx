import {FC, useState} from "react";
import styled from "styled-components";
import {languagesTypes} from "../types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import burgerMenuData from '../dataset/burgerMenuData.json'
import { Link } from "react-router-dom";

interface IStyles{
    isOpen:boolean
}

const Style = styled.div<IStyles>`
    .openBurgerMenuBtn, .closeBurgerMenuBtn{
      color: var(--primary-background-color);
      svg{
        width: 2rem;
        height: 2rem;
      }
    }
  .menuItems{
    display:${({isOpen})=> isOpen?'flex':'none'};
    flex-direction: column;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: var(--primary-active-color);
    
    .closeBurgerMenuBtn{
      display: flex;
      justify-content: flex-end;
    }
    
    
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
    .openBurgerMenuBtn, .closeBurgerMenuBtn{
      display: none;
    }
    .menuItems{
      display: flex;
      flex-direction: row;
      position: initial;
      //gap: 1rem;
      .closeBurgerMenuBtn{
        display: none;
      }
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
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const isGitHubPages = window.location.hostname.includes('github.io');

    return (
        <Style isOpen={isOpen}>
            <button className={'openBurgerMenuBtn btn btn-transparent'}
                    onClick={()=>setIsOpen(true)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>

            <div className={'menuItems'} >
                <button className={'closeBurgerMenuBtn btn btn-transparent'} onClick={()=>setIsOpen(false)}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>

                {burgerMenuData.items.map((item:menuItem)=>{
                    return <Link className={'menuItem'}
                                 onClick={()=>setIsOpen(false)}
                                 to={item.url}>
                        {item.name[activeLanguage]}
                    </Link>
                })}
            </div>

        </Style>
    )
};
export default BurgerMenu;