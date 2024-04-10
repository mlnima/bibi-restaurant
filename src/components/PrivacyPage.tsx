import {FC} from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
img{
  max-width: 600px;
}
`;

interface PropTypes {
}

const PrivacyPage: FC<PropTypes> = ({}) => {
    return (
        <Style>
            <img src={`${process.env.PUBLIC_URL}/Datenschutzerklärung.png`} alt="logo"/>
        </Style>
    )
};
export default PrivacyPage;