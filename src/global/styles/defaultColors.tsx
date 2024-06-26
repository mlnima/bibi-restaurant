import { css } from 'styled-components';
//var(--primary-text-color,#fff)
//var(--primary-background-color,#000)
const defaultColors = css`
  :root{
    --primary-text-color: #fff;
    --secondary-text-color: #ccc;
    --tertiary-text-color: #c7c7c7;

    --primary-background-color: #000;
    --secondary-background-color: #181818;
    --dim-background-color:rgba(0,0,0,.6);
    
    --primary-active-color :#FFC000;
    --primary-gradiant:linear-gradient(180deg,#fff,hsla(0,0%,100%,.6));
    //buttons
    --primary-button-link-background-color: #FFC000;
    --primary-button-link-text-color: #000;

    --secondary-button-link-background-color: #6c757d;
    --secondary-button-link-text-color: #fff;

    --success-button-link-background-color: #28a745;
    --success-button-link-text-color: #fff;

    --danger-button-link-background-color: #dc3545;
    --danger-button-link-text-color: #fff;

    --warning-button-link-background-color: #FFC000;
    --warning-button-link-text-color: #212529;

    --info-button-link-background-color: #117a8b;
    --info-button-link-text-color: #fff;

    --dark-button-link-background-color:#1b1b1b;
    --dark-button-link-border-color: #1b1b1b;
    --dark-button-link-text-color: #fff;

    --light-button-link-background-color:#f8f9fa;
    --light-button-link-border-color: #f8f9fa;
    --light-button-link-text-color: #212529;
  }
`

export default defaultColors