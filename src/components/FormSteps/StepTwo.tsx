// components/StepTwo.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"
import PlanCard from "../UI/PlanCard"
import ToggleSwitch from "../UI/ToogleSwitch"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"

const FormContainer = styled.div`
  padding: 50px 20px 50px 0px;
  margin: 20px;
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

  return (
    <>
      <StepsSideBar steps={stepTwoState} />
      <FormContainer>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form className='multi-step-form' onSubmit={handleSubmit}>
          <div>
            <PlanCard
              plan='Arcade'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
            />
            <PlanCard
              plan='Advanced'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
            />
            <PlanCard
              plan='Pro'
              selectedPlan={stepTwo.plan}
              planPrices={stepTwo.planPrices}
              onSelectPlan={handleSelectPlan}
              isYearly={stepTwo.isYearly}
            />
          </div>

          <ToggleSwitch
            isYearly={stepTwo.isYearly}
            onToggle={handleTogglePayment}
          />

          <button onClick={backButton}>Back</button>
          <button type='submit'>Next</button>
        </form>
      </FormContainer>
    </>
  )
}

export default StepTwo
