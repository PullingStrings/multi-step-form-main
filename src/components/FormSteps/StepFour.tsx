// components/StepFour.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"

const FormContainer = styled.div`
  position: relative;
  width: 50%;
`
const InfoContainer = styled.div`
  padding: 10px;
  background-color: #adbeff40;
  border-radius: 5px;
  margin: 10px 0px;
`

const SummaryContainer = styled.div`
  padding: 15px;
  background-color: #adbeff40;
  border-radius: 5px;
  margin: 10px 0px;
`

const SelectedPlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 15px;
  border-bottom: 1px solid #adbeff40;

  strong {
    color: #02295a;
  }
`

const AddOnsSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`
const AddOnsContainer = styled.div`
  padding: 15px 0px;
`

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #02295a;
  }
`

const ChangeButton = styled.div`
  border: none;
  text-decoration: underline;
  color: #9699ab;
`

const ConfirmBtn = styled.button`
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
`

const StepFour: React.FC = () => {
  // type PlanType = "Arcade" | "Advanced" | "Pro"

  const [{ stepOne, stepTwo, stepThree }, dispatch] = useFormContext()
  const setFourState = 4

  const selectedPlan = stepTwo.plan
  const isYearly = stepTwo.isYearly
  const selectedPlanPrices =
    stepTwo.planPrices[stepTwo.plan as keyof typeof stepTwo.planPrices]

  const price = isYearly
    ? selectedPlanPrices.yearly
    : selectedPlanPrices.monthly

  const calculateTotal = () => {
    // Assuming that each plan and add-on has a price in dollars
    let total = 0
    // Logic to add up prices based on the selected plan and add-ons
    // For example:
    // if (stepTwo.plan === 'arcade') total += 10;
    // if (stepTwo.isYearly) total *= 12;

    stepThree.forEach((addOn) => {
      if (addOn.selected) {
        // Assuming price is stored like "+$1/mo" and converting it to integer
        const addOnPrices = isYearly
          ? parseInt(addOn.price.yearly.replace(/[^0-9]/g, ""))
          : parseInt(addOn.price.monthly.replace(/[^0-9]/g, ""))
        total += addOnPrices
      }
    })

    if (stepTwo.isYearly) {
      total += 12
    }

    return total + price
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Validate and save data, then go to next step
    dispatch({ type: "SET_STEP", payload: 5 })
  }

  const backButton = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch({ type: "SET_STEP", payload: 3 })
  }

  const planSection = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch({ type: "SET_STEP", payload: 2 })
  }

  return (
    <>
      <StepsSideBar steps={setFourState} />
      <FormContainer>
        <form className='multi-step-form' onSubmit={handleSubmit}>
          <div className='titles'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confiming.</p>
            <InfoContainer>
              <h3>Your Information:</h3>
              <p>Name: {stepOne.name}</p>
              <p>Email: {stepOne.email}</p>
              <p>Phone: {stepOne.phone}</p>
            </InfoContainer>
          </div>
          <SummaryContainer>
            <SelectedPlanContainer>
              <div>
                <strong>
                  {selectedPlan} ({isYearly ? "Yearly" : "Monthly"})
                </strong>
                <ChangeButton onClick={planSection}>Change</ChangeButton>
              </div>
              <div>
                <strong>
                  ${price}({isYearly ? "Yr" : "Mo"})
                </strong>
              </div>
            </SelectedPlanContainer>

            <AddOnsContainer>
              {stepThree.map(
                (addOn, index) =>
                  addOn.selected && (
                    <AddOnsSummaryContainer key={index}>
                      <p>{addOn.title}</p>
                      {isYearly ? addOn.price.yearly : addOn.price.monthly}
                    </AddOnsSummaryContainer>
                  )
              )}
            </AddOnsContainer>
          </SummaryContainer>

          <TotalContainer>
            <div>
              <p>Total (per {isYearly ? "year" : "month"})</p>
            </div>
            <div>
              <span>
                ${calculateTotal()}/{isYearly ? "yr" : "mo"}
              </span>
            </div>
          </TotalContainer>

          <BackBtn onClick={backButton}>Go Back</BackBtn>
          <ConfirmBtn type='submit'>Confrim</ConfirmBtn>
        </form>
      </FormContainer>
    </>
  )
}

export default StepFour
