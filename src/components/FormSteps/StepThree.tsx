// components/StepThree.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"
import AddOnCard from "../UI/AddOnCard"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"

const StepThree: React.FC = () => {
  const [{ stepThree }, dispatch] = useFormContext()
  const stepThreeState = 3

  const handleToggleAddOn = (title: string) => {
    const newAddOns = stepThree.map((addOn) =>
      addOn.title === title ? { ...addOn, selected: !addOn.selected } : addOn
    )

    dispatch({
      type: "SET_STEP_THREE",
      payload: newAddOns,
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Validate and save data, then go to next step
    dispatch({ type: "SET_STEP", payload: 4 })
  }

  const backButton = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch({ type: "SET_STEP", payload: 2 })
  }

  return (
    <>
      <StepsSideBar steps={stepThreeState} />
      <div className='form-main-container'>
        <div className='titles'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <form className='multi-step-form' onSubmit={handleSubmit}>
          <div>
            {stepThree.map((addOn: any) => (
              <AddOnCard
                key={addOn.title}
                title={addOn.title}
                subtitle={addOn.subtitle}
                price={addOn.price}
                selected={addOn.selected}
                onToggle={() => handleToggleAddOn(addOn.title)}
              />
            ))}
          </div>
          <button className='back-button' onClick={backButton}>
            Go Back
          </button>
          <button className='next-button' type='submit'>
            Next Step
          </button>
        </form>
      </div>
    </>
  )
}

export default StepThree
