import React, { useState } from "react"
import styled from "styled-components"
import bgSideBarDesktop from "../../../public/images/bg-sidebar-desktop.svg"
import bgSideBarMobile from "../../../public/images/bg-sidebar-mobile.svg"

const Span = styled.span<{ $ishighlighted?: boolean }>`
  padding: 10px;
  margin: 10px;
  color: ${(props) => (props.$ishighlighted ? "black" : "white")};
  background-color: ${(props) =>
    props.$ishighlighted ? "hsl(217, 100%, 97%)" : "transparent"};
  border-radius: 50px;
  border: 1px solid ${(props) => (props.$ishighlighted ? "#483eff" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`

const ContentElementContainer = styled.div`
  font-size: 12px;
  p,
  h2 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const Container = styled.div`
  background-image: url(${bgSideBarDesktop.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  border-radius: 10px;
  width: 274px;
  height: 568px;

  @media (max-width: 768px) {
    width: 100%;
    height: 172px;
    display: flex;
    background-image: url(${bgSideBarMobile.src});
    border-radius: 0px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`
const StepsDiv = styled.div`
  padding: 0px 20px 15px 20px;
  display: flex;
  color: white;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`
const StepsSideBar = (stepNumber: { steps: number }) => {
  return (
    <Container>
      <StepsDiv>
        <Span $ishighlighted={stepNumber.steps === 1 ? true : false}>1</Span>
        <ContentElementContainer>
          <p>Step 1</p>
          <h2>Your Info</h2>
        </ContentElementContainer>
      </StepsDiv>
      <StepsDiv>
        <Span $ishighlighted={stepNumber.steps === 2 ? true : false}>2</Span>
        <ContentElementContainer>
          <p>Step 2</p>
          <h2>Select Plan</h2>
        </ContentElementContainer>
      </StepsDiv>
      <StepsDiv>
        <Span $ishighlighted={stepNumber.steps === 3 ? true : false}>3</Span>
        <ContentElementContainer>
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </ContentElementContainer>
      </StepsDiv>
      <StepsDiv>
        <Span $ishighlighted={stepNumber.steps === 4 ? true : false}>4</Span>
        <ContentElementContainer>
          <p>Step 4</p>
          <h2>Summary</h2>
        </ContentElementContainer>
      </StepsDiv>
    </Container>
  )
}

export default StepsSideBar
