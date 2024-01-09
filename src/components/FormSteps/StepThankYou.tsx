import React from "react"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"
import Image from "next/image"

const MainContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;

  h1 {
    margin: 20px 0px;
  }

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StepThankYou: React.FC = () => {
  const stepFourState = 4
  return (
    <>
      <StepsSideBar steps={stepFourState} />
      <div className='form-main-container'>
        <MainContainer>
          <Image
            sizes='100vw'
            width={100}
            height={100}
            src={"/images/icon-thank-you.svg"}
            alt={"Thank you icon"}
          />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </MainContainer>
      </div>
    </>
  )
}

export default StepThankYou
