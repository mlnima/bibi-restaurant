import React from 'react';
import styled from 'styled-components';
import {languagesTypes} from "../types";

interface MenuItemProps {
    id: string;
    categories: number[];
    name: {
        EN: string;
        DE: string;
        FA: string;
        AR: string;
    };
    price: string;
    activeLanguage?:languagesTypes // Assuming only these languages are supported
}

const Card = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  border-bottom: 1px solid  var(--primary-background-color);
  width: 100%;
  font-weight: bold;

  .itemId,.itemName,.itemPrice{
    padding: 1rem;
    box-sizing: border-box;

  }
  .itemId,.itemPrice{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .itemName{
    border-left: 1px solid  var(--primary-background-color);
  }
  .itemPrice{
    border-left: 1px solid  var(--primary-background-color);
 


  }
  
`;


const MenuItem: React.FC<MenuItemProps> = ({ id, name, price, activeLanguage='DE' }) => {
    const itemName = name[activeLanguage];

    return (
        <Card style={{gridTemplateColumns:price?'4rem 1fr 6rem':'4rem 1fr'}}>
            <div className="itemId">
                {id}
            </div>
            <div className="itemName">
                {itemName}
            </div>
            {!!price &&
                <div className="itemPrice">
                    {price} €
                </div>
            }

        </Card>
    );
};

export default MenuItem;
