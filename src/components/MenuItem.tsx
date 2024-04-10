import React from 'react';
import styled from 'styled-components';
import {languagesTypes} from "../types";
import days from "../dataset/days.json";

interface MenuItemProps {
    id: string;
    categories: number[];
    day?: number[],
    name: {
        [key:string]:string
    };
    price: string;
    activeLanguage?: languagesTypes // Assuming only these languages are supported
}

const Card = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  border-bottom: 1px solid var(--primary-background-color);
  width: 100%;
  font-weight: bold;
  grid-template-columns: 2rem 1fr 3rem;
  margin: 0;
  

  .itemId, .itemName, .itemPrice {
    padding: 1rem;
    box-sizing: border-box;

  }

  .itemId, .itemPrice {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
  }

  .itemName {
    border-left: 1px solid var(--primary-background-color);
    border-right: 1px solid var(--primary-background-color);
    
  }

  .itemPrice {
    border-left: 1px solid var(--primary-background-color);
    border-right: 1px solid var(--primary-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px){
    grid-template-columns: 4rem 1fr 6rem;
  }

`;


const MenuItem: React.FC<MenuItemProps> = ({id, name, price, day, activeLanguage = 'DE'}) => {
    const itemName = name[activeLanguage];
//style={{gridTemplateColumns: price ? '4rem 1fr 6rem 6rem' : '4rem 1fr'}}
    return (
        <Card >
            <div className="itemId">
                {id}
            </div>
            <div className="itemName">
                {`${itemName} `}

                {!!day?.length &&
                    <>
                    {' - '}
                        {day.map(dayToRender => days[dayToRender].name[activeLanguage]).join(', ')}
                    </>
                }
            </div>
            {!!price &&
                <div className="itemPrice">
                    {price}
                </div>
            }


        </Card>
    );
};

export default MenuItem;
