import {FC} from "react";
import styled from "styled-components";

const Style = styled.div``;

interface PropTypes {
}

const NotFoundPage: FC<PropTypes> = ({}) => {
    return (
        <Style>
            Not Found 404
        </Style>
    )
};
export default NotFoundPage;