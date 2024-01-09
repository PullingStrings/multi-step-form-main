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
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`

const IconImage = styled(Image)`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`

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
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 },
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

  const planPrice = planPrices[plan]

  return (
    <Container
      onClick={() => {
        onSelectPlan(plan)
        handleClick(plan)
      }}
      style={{
        background: isSelected ? "#f0f6ff" : "none",
        border: isSelected ? "1px solid #ae2aff" : "1px solid #ccc",
      }}
    >
      <IconImage src={icons} alt={plan} />

      <div>
        <h4
          style={{
            paddingBottom: "5px",
            color: "hsl(213, 96%, 18%)",
          }}
        >
          {plan}
        </h4>
        <p
          style={{
            paddingBottom: "5px",
          }}
        >
          {isYearly ? `$${planPrice?.yearly}/yr` : `$${planPrice?.monthly}/mo`}
        </p>
        <p
          style={{
            color: "hsl(213, 96%, 18%)",
            display: isYearly ? "block" : "none",
            paddingBottom: "5px",
          }}
        >
          2 months free
        </p>
      </div>
    </Container>
  )
}

export default PlanCard
