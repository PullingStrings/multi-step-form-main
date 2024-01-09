// components/StepTwo.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"
import PlanCard from "../UI/PlanCard"
import ToggleSwitch from "../UI/ToogleSwitch"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"
import iconArcade from "../../../public/images/icon-arcade.svg"
import iconAdvanced from "../../../public/images/icon-advanced.svg"
import iconPro from "../../../public/images/icon-pro.svg"

const IconsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StepTwo: React.FC = () => {
  const [{ stepTwo }, dispatch] = useFormContext()
  const stepTwoState = 2

  const handleSelectPlan = (plan: string) => {
    dispatch({
      type: "SET_STEP_TWO",
      payload: { ...stepTwo, plan },
    })
  }

  const handleTogglePayment = () => {
    dispatch({
      type: "SET_STEP_TWO",
      payload: { ...stepTwo, isYearly: !stepTwo.isYearly },
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Validate and save data, then go to next step
    dispatch({ type: "SET_STEP", payload: 3 })
  }

  const backButton = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch({ type: "SET_STEP", payload: 1 })
  }

  const pleaseSelectPlanErr = (event: React.MouseEvent) => {
    event.preventDefault()
    document.querySelector(".error-message")?.classList.add("show")
  }

  return (
    <>
      <StepsSideBar steps={stepTwoState} />
      <div className='form-main-container'>
        <div className='titles'>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <p className='error-message'>
            {stepTwo.plan === "" ? "Please select a plan" : ""}
          </p>
        </div>

        <form className='multi-step-form' onSubmit={handleSubmit}>
          <IconsContainer>
            <PlanCard
              plan='Arcade'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
              icons={iconArcade}
            />
            <PlanCard
              plan='Advanced'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
              icons={iconAdvanced}
            />
            <PlanCard
              plan='Pro'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
              icons={iconPro}
            />
          </IconsContainer>

          <ToggleSwitch
            isYearly={stepTwo.isYearly}
            onToggle={handleTogglePayment}
          />

          <button className='back-button' onClick={backButton}>
            {" "}
            Go Back
          </button>
          {stepTwo.plan === "" ? (
            <button
              onClick={pleaseSelectPlanErr}
              className='next-button disabled'
            >
              Next Step
            </button>
          ) : (
            <button className='next-button' type='submit'>
              Next Step
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default StepTwo
