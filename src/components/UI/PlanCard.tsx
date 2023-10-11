// components/PlanCard.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext" // Adjust the import to match your actual file structure

type PlanCardProps = {
  plan: string
  selectedPlan: string
  onSelectPlan: (plan: string) => void
  isYearly: boolean
  planPrices: {
    Arcade: { monthly: number; yearly: number }
    Advanced: { monthly: number; yearly: number }
    Pro: { monthly: number; yearly: number }
  }
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  selectedPlan,
  onSelectPlan,
  isYearly,
  planPrices,
}) => {
  const [state, dispatch] = useFormContext()
  const isSelected = plan === selectedPlan

  const handleClick = (planName: string) => {
    const selectedPlanPrices = {
      Arcade: { monthly: 0.99, yearly: 9.99 },
      Advanced: { monthly: 1.99, yearly: 19.99 },
      Pro: { monthly: 2.99, yearly: 29.99 },
    }

    dispatch({
      type: "SET_STEP_TWO",
      payload: {
        plan: planName,
        paymentType: false,
        isYearly: isYearly,
        planPrices: selectedPlanPrices,
      },
    })
  }

  // console.log(planPrices[plan])
  const planPrice = planPrices[plan]
  // const planPrice =
  //   state.stepTwo.planPrices[
  //     state.stepTwo.plan as keyof typeof state.stepTwo.planPrices
  //   ]

  // console.log(planPrice)

  return (
    <div
      onClick={() => {
        onSelectPlan(plan)
        handleClick(plan)
      }}
      style={{ border: isSelected ? "2px solid #000" : "none" }}
    >
      <div>{plan}</div>
      <div>
        {isYearly ? `$${planPrice?.yearly}/yr` : `$${planPrice?.monthly}/mo`}
      </div>
    </div>
  )
}

export default PlanCard
