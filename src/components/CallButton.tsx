import {FC} from "react";
import styled from "styled-components";
import restaurantData from '../dataset/restaurantData.json';

const Style = styled.div`
  background-image: url('/phone.png');
  background-position: center center;
  background-size: cover;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: black;
  border-radius: 45px;
  p{visibility: hidden}
`;

interface PropTypes {
}

const CallButton: FC<PropTypes> = ({}) => {
    return (
        <Style>
            <a href={`tel:${restaurantData.tel}`} target="_self" className="link-to">
                <p>call now</p>
            </a>
        </Style>
    )
};
export default CallButton; 