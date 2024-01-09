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
    background: #eef5ff;
  }

  h1 {
    margin-bottom: 5px;
    color: var(--marine-blue);
  }

  p {
   color: var(--cool-gray);
   font-size: 16px;

   @media (max-width: 768px) {
    font-size: 14px;

   }
  }

  p.error-message {
    display: none;
  }
  p.error-message.show {
    display: block;
    color: red;
    animation: bounce 2s ;
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-10px);
    }
}

  .titles{
    padding: 20px;

    @media (max-width: 768px) {
      padding: 10px 20px
    }
  }

  .multi-step-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    justify-content: start;

    @media (max-width: 768px) {
      padding: 10px 20px
    }
  }

  .form-main-container {
    position: relative;
    width: 60%;

    @media (max-width: 768px) {
      width: 90%;
      bottom: 95px;
      background: white;
      margin: 20px;
      border-radius: 5px;
    }
  }

  input {
   padding: 15px;
   margin-bottom: 30px;
   margin-top: 5px;
   border-radius: 5px;
   border: 1px solid var(--cool-gray);
   font-weight: bold;
   color: #000;

   @media (max-width: 768px) {
    margin-bottom: 15px;
   }
  }

  .next-button {
    background-color: hsl(213, 96%, 18%);
    color: #fff;
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    right: 0px;

    @media (max-width: 768px) {
      bottom: -170px;
    }
  }

  .next-button.disabled {
    background-color: hsl(231, 11%, 63%);
  }


  .back-button {
    background-color: #fff;
    color: hsl(231, 11%, 63%);
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    left: 0px;

     @media (max-width: 768px) {
      bottom: -170px;
    }
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
