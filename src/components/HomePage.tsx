import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import menuData from '../dataset/menuData.json';
import {languagesTypes} from "../types";

interface IProps {
    activeLanguage: languagesTypes
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .note{
     font-size: 1.5rem;
  }
  .cardContainer{
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.375rem;
    max-width: 760px;
    margin: auto;
    color: var(--primary-background-color);
    border: 1px solid var(--primary-background-color);
    background-color: var(--primary-active-color);

  }
`;

const HomePage: React.FC<IProps> = ({ activeLanguage }) => {
    return (
        <Style>
            <span className={'note'}>Bibi restaurant prices have increased between 10 and 25%</span>
            <div className={'cardContainer'}>
                {menuData.map((menuItem: any) => (
                    <MenuItem
                        key={menuItem.id}
                        id={menuItem.id}
                        categories={menuItem.categories}
                        name={menuItem.name}
                        price={menuItem.price}
                        activeLanguage={activeLanguage}
                    />
                ))}
            </div>
        </Style>
    );
};

export default HomePage;
