// components/StepFour.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"

const StepFour: React.FC = () => {
  const [{ stepOne, stepTwo, stepThree }, dispatch] = useFormContext()

  const selectedPlan = stepTwo.plan
  const isYearly = stepTwo.isYearly
  const selectedPlanPrices = stepTwo.planPrices[selectedPlan]

  const price = isYearly
    ? selectedPlanPrices.yearly
    : selectedPlanPrices.monthly

  const calculateTotal = () => {
    // Assuming that each plan and add-on has a price in dollars
    let total = 0
    console.log(stepTwo)
    // Logic to add up prices based on the selected plan and add-ons
    // For example:
    // if (stepTwo.plan === 'arcade') total += 10;
    // if (stepTwo.isYearly) total *= 12;

    stepThree.forEach((addOn) => {
      if (addOn.selected) {
        // Assuming price is stored like "+$1/mo" and converting it to integer
        const price = parseInt(addOn.price.replace(/[^0-9]/g, ""))
        total += price
      }
    })

    if (stepTwo.isYearly) {
      total *= 12
    }

    return total
  }

  return (
    <div>
      <h2>Summary</h2>

      <div>
        <h3>Your Information:</h3>
        <p>Name: {stepOne.name}</p>
        <p>Email: {stepOne.email}</p>
        <p>Phone: {stepOne.phone}</p>
      </div>

      <div>
        <h3>Selected Plan:</h3>
        <p>
          {selectedPlan} ({isYearly ? "Yearly" : "Monthly"}) - ${price}
        </p>
      </div>

      <div>
        <h3>Add-ons:</h3>
        <ul>
          {stepThree.map(
            (addOn, index) =>
              addOn.selected && (
                <li key={index}>
                  {addOn.title} ({addOn.price})
                </li>
              )
          )}
        </ul>
      </div>

      <div>
        <h3>Total Price: </h3>
        <p>${calculateTotal()}</p>
      </div>

      <button
        onClick={() => {
          /* Confirm and complete order logic here */
        }}
      >
        Confirm
      </button>
    </div>
  )
}

export default StepFour
