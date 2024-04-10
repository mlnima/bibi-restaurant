import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import menuData from '../dataset/menuData.json';
import {languagesTypes, menuItemTypes} from "../types";
import restaurantData from '../dataset/restaurantData.json';
import categories from '../dataset/categories.json';

import translations from "../dataset/translations.json";
import days from "../dataset/days.json";
import Switch from "react-switch";

interface IProps {
    activeLanguage: languagesTypes,
    today: number
}

interface IStyle {
    showPickupPrice: boolean
}

const Style = styled.div<IStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 760px;
  margin: 0 auto 4rem auto;


  .note {
    font-size: 1.25rem;
    padding: .25rem;
    color: var(--primary-active-color);
    text-align: center;
  }

  .categoriesWrapper {
    width: 100%;

    .categoryWrapperTitle {
      grid-column-end: span 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: .01rem .5rem;
      font-weight: bold;
      border-bottom: 1px solid var(--primary-background-color);

      p {
        margin: .25rem;
      }
    }

    .categoriesContainer {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      width: 100%;

      button {
        font-weight: bold;
        min-width: 120px;
      }
    }


  }

  .cardContainerTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .01rem .5rem;
    font-weight: bold;
    border-bottom: 1px solid var(--primary-background-color);

    p {
      margin: .25rem;
    }
  }

  .cardContainerHeaders {
    display: grid;
    grid-template-columns: 2rem 1fr  3rem;
    font-weight: bold;
    width: 100%;
    font-size: .8rem;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .titlePriceType {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .3rem;
    }
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.375rem;
    //margin: auto;
    width: 100%;
    color: var(--primary-background-color);
    border: 1px solid var(--primary-background-color);
    background-color: ${({showPickupPrice}) => showPickupPrice ? '#44D62C' : 'var(--primary-active-color)'};
  }

  .foodOfTheDay {
    font-size: 1rem;
    // background-color: var(--secondary-background-color);
  }


  @media only screen and (min-width: 768px) {
    .cardContainerHeaders {
      grid-template-columns: 4rem 1fr  6rem;
    }
  }
`;

const HomePage: React.FC<IProps> = ({activeLanguage, today}) => {

    const [activeFilter, setActiveFilter] = useState<number | null>(8)
    const [renderingItems, setRenderingItems] = useState<any>([])
    const [showPickupPrice, setShowPickupPrice] = useState<boolean>(false)
    const [foodOfTheDay, setFoodOfTheDay] = useState<any>([])

    useEffect(() => {
        if (activeFilter) {
            setRenderingItems(
                menuData.filter(item => {
                    return item.categories.includes(activeFilter)
                })
            )
        } else {
            setRenderingItems(menuData)
        }


    }, [activeFilter]);
    useEffect(() => {
        setFoodOfTheDay(menuData.filter(item => item?.day?.includes(today)))
    }, [today]);


//#44D62C
    //     {days[today].name[activeLanguage]}
    return (
        <Style dir={activeLanguage === 'FA' || activeLanguage === 'AR' ? 'rtl' : 'ltr'}
               showPickupPrice={showPickupPrice}>
            {
                restaurantData.importantNotes.map(note => {
                    return note[activeLanguage] ? <span className={'note'}>{note[activeLanguage]}</span> : null
                })
            }

            {foodOfTheDay.length > 0 &&
                <>
                    <span className={'cardContainerTitle'}>
                           <p>{translations.Today[activeLanguage]}</p>
                           <p>{days[today].name[activeLanguage]}</p>
                    </span>
                    <div className={'cardContainer foodOfTheDay'}>
                        {foodOfTheDay.map((menuItem: menuItemTypes) => {
                            return <MenuItem
                                key={menuItem.id}
                                id={menuItem.id}
                                categories={menuItem.categories}
                                name={menuItem.name}
                                price={showPickupPrice ? menuItem.pickupPrice : menuItem.price}
                                activeLanguage={activeLanguage}
                            />
                        })}

                    </div>
                </>
            }
            <div className={'categoriesWrapper '}>
                <div className="categoryWrapperTitle">
                    <p>
                        {translations.Categories[activeLanguage]}
                    </p>
                </div>
                <div className="categoriesContainer">
                    {categories.map(category => {

                        return <button className={'categoryFilter btn btn-primary'}
                                       onClick={() => setActiveFilter(category.id)}>
                            {category.name[activeLanguage]}
                        </button>
                    })}
                </div>

            </div>

            <span className={'cardContainerTitle'}>
                 <p>{translations.FoodMenu[activeLanguage]}</p>
            </span>

            <span className={'cardContainerHeaders'}>
                 <p>{translations.ID[activeLanguage]}</p>


                <div className={'titlePriceType'}>
                            <p>{translations.FoodMenu[activeLanguage]}</p>
                             -
                    {showPickupPrice ?
                        <p>{translations.TakeAway[activeLanguage]}</p> :
                        <p>{translations.EatingInside[activeLanguage]}</p>
                    }
                    <Switch onChange={() => setShowPickupPrice(!showPickupPrice)}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            offColor={'#44D62C'}
                            onColor={'#FFC000'}
                            checked={!showPickupPrice}/>
                </div>
                <p>€</p>
            </span>

            <div className={'cardContainer'}>
                {renderingItems.map((menuItem: any) => (
                    <MenuItem
                        key={menuItem.id}
                        id={menuItem.id}
                        day={menuItem?.day}
                        categories={menuItem.categories}
                        name={menuItem.name}
                        price={showPickupPrice ? menuItem.pickupPrice : menuItem.price}

                        activeLanguage={activeLanguage}
                    />
                ))}
            </div>
        </Style>
    );
};

export default HomePage;
