import {FC} from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    iframe{
      width: 100%;
      max-width: 800px;
      min-height: 600px;
    }
`;

interface PropTypes {
}

const AddressPage: FC<PropTypes> = () => {
    return (
        <Style>
            <p>Halemweg 17, 13627 Berlin, Germany Tel:030 52669566</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.00619512356252!2d13.285811759126597!3d52.5368601026259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a856b5a5ecb07d%3A0xbb85359b2eedd7cb!2sBibi!5e0!3m2!1sen!2sch!4v1595795729099!5m2!1sen!2sch"
                  aria-hidden="false"></iframe>
        </Style>
    )
};
export default AddressPage;