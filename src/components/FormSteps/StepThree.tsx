// components/StepThree.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"
import AddOnCard from "../UI/AddOnCard"

const StepThree: React.FC = () => {
  const [{ stepThree }, dispatch] = useFormContext()

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

  return (
    <form onSubmit={handleSubmit}>
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

      <button type='submit'>Next</button>
    </form>
  )
}

export default StepThree
