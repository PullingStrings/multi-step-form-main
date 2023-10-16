// GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /* Reset some default browser styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set your base font size and font family */
  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 16px;
    background: var(--alabaster);
  }

  p {
   color: var(--cool-gray);s
  }

  .multi-step-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 35px;
  justify-content: space-between;
    {
      flex: 1;
    }
  }

  input {
   padding: 15px;
   margin-bottom: 30px;
   margin-top: 5px;
   border-radius: 5px;
   border: 1px solid var(--cool-gray);
  }

  /* Define your color variables */
  :root {
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);

    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
  }

  /* Apply these colors as needed in your components */
  /* For example: */
  /* background-color: var(--marine-blue); */

  /* Define your layout widths */
  @media (max-width: 375px) {
    /* Styles for mobile devices */
    /* You can apply your mobile styles here */
  }

  @media (min-width: 1440px) {
    /* Styles for desktop devices */
    /* You can apply your desktop styles here */
  }
`;

export default GlobalStyles;
