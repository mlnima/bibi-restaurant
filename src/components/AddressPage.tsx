import {FC} from "react";
import styled from "styled-components";
import restaurantData from '../dataset/restaurantData.json';
import translations from '../dataset/translations.json';
import days from "../dataset/days.json";
import {languagesTypes} from "../types";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 4rem auto;
    .addressNButton{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .5rem;
        padding: .5rem 1rem;
        box-sizing: border-box;
        a{
            display: flex;
            gap: .5rem;
            align-items: center;
        }
    }

  iframe {
    width: 100%;
    max-width: 800px;
    min-height: 600px;
  }

  .workingHoursInWeek {
    border-radius: 0.375rem;
    color: var(--primary-background-color);
    border: 1px solid var(--primary-background-color);
    background-color: var(--primary-active-color);
    padding: 0 4rem;
    margin: 1rem;
    
    div {
      
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

interface PropTypes {
    activeLanguage: languagesTypes,
}

const AddressPage: FC<PropTypes> = ({activeLanguage}) => {


    return (
        <Style>
            <div className={'addressNButton'}>
                <p>{restaurantData.address}</p>
                <p> Tel: {restaurantData.tel}</p>

                <Link className={'btn btn-primary'} to={restaurantData.mapLink} target={"_blank"}>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    {translations?.["Map"]?.[activeLanguage]}
                </Link>
            </div>
            <div className={'workingHoursInWeek'}>
                {restaurantData.workingHours.map((workingDay, index) => {
                    return <div>
                        {/*//@ts-ignore*/}
                        <p>{days[workingDay.day].name[activeLanguage]}</p>
                        <p>{workingDay.hours}</p>
                    </div>
                })}
            </div>
            {/*<iframe*/}
            {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.00619512356252!2d13.285811759126597!3d52.5368601026259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a856b5a5ecb07d%3A0xbb85359b2eedd7cb!2sBibi!5e0!3m2!1sen!2sch!4v1595795729099!5m2!1sen!2sch"*/}
            {/*    aria-hidden="false">*/}
            {/*</iframe>*/}
            <iframe
                src={restaurantData.mapEmbedUrl}
                aria-hidden="false">

            </iframe>
        </Style>
    )
};
export default AddressPage;