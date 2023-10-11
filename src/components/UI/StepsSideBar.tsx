import React, { useState } from "react"
import styled from "styled-components"
import bgSideBarDesktop from "../../../public/images/bg-sidebar-desktop.svg"

const Span = styled.span<{ isActive?: boolean }>`
  padding: 15px;
  margin: 10px;
  color: ${(props) => (props.isActive ? "black" : "white")};
  background-color: ${(props) =>
    props.isActive ? "hsl(217, 100%, 97%)" : "transparent"};
  border-radius: 100%;
  border: 1px solid ${(props) => (props.isActive ? "#483eff" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
const Container = styled.div`
  background-image: url(${bgSideBarDesktop.src});
  background-size: cover; /* or you can use 'contain' */
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
`
const StepsDiv = styled.div`
  display: flex;
  color: white;
`
const StepsSideBar = (stepNumber: { steps: number }) => {
  return (
    <Container>
      <StepsDiv>
        <Span isActive={stepNumber.steps === 1 ? true : false}>1</Span>
        <h2>Step 1</h2>
        <p>Your Info</p>
      </StepsDiv>
      <StepsDiv>
        <Span isActive={stepNumber.steps === 2 ? true : false}>2</Span>
        <h2>Step 2</h2>
        <p>Select Plan</p>
      </StepsDiv>
      <StepsDiv>
        <Span isActive={stepNumber.steps === 3 ? true : false}>3</Span>
        <h2>Step 3</h2>
        <p>Add-ons</p>
      </StepsDiv>
      <StepsDiv>
        <Span isActive={stepNumber.steps === 4 ? true : false}>4</Span>
        <h2>Step 4</h2>
        <p>Summary</p>
      </StepsDiv>
    </Container>
  )
}

export default StepsSideBar
