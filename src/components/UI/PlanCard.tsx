// components/PlanCard.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext" // Adjust the import to match your actual file structure
import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.3s ease-in-out;
`

const Icons = styled``

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
  icons: {
    Arcade: string
    Advanced: string
    Pro: string
  }
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  selectedPlan,
  onSelectPlan,
  isYearly,
  planPrices,
  icons,
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
    <Container
      onClick={() => {
        onSelectPlan(plan)
        handleClick(plan)
      }}
      style={{ background: isSelected ? "purlple" : "none" }}
    >
      <Image
        src={icons}
        alt={plan}
        style={{
          marginBottom: "20px",
        }}
      />

      <div>
        <h4>{plan}</h4>
        <p>
          {isYearly ? `$${planPrice?.yearly}/yr` : `$${planPrice?.monthly}/mo`}
        </p>
      </div>
    </Container>
  )
}

export default PlanCard
