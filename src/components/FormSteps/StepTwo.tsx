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

const FormContainer = styled.div`
  padding: 50px 20px 50px 0px;
  margin: 20px;
`

const IconsContainer = styled.div`
  display: flex;
`

const NextBtn = styled.button`
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
`

const BackBtn = styled.button`
  background-color: hsl(213, 96%, 18%);
  color: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  left: 0px;
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

          <BackBtn onClick={backButton}>Back</BackBtn>
          <NextBtn type='submit'>Next</NextBtn>
        </form>
      </FormContainer>
    </>
  )
}

export default StepTwo
