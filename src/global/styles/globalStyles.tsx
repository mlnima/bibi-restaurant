import {createGlobalStyle} from "styled-components";
import buttonsStyle from './buttonsStyle';
import defaultColors from './defaultColors';
import inputsStyles from './inputsStyles';
import selectsStyle from './selectsStyle';
import scrollBars from './scrollBars';
import {FC} from "react";


const Styles = createGlobalStyle`
  ${buttonsStyle}
  ${defaultColors}
  ${inputsStyles}
  ${selectsStyle}
  ${scrollBars}
  
  body {
    background-color: var(--primary-background-color,#000);
    color: var(--primary-text-color,#fff);
    margin: 0 !important;
    font-family: Arial,Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //font-size: 12px;
  }
  *{
    a {
      text-decoration: none;
      color: var(--primary-text-color,#fff);
    }
    //svg{
    //  color: var(--primary-text-color,#fff);
    //  background-color: transparent;
    //}
  }
  
`

interface PropTypes {

}

const GlobalStyles: FC<PropTypes> = () => {
    return (
        <Styles/>
    )
};

export default GlobalStyles