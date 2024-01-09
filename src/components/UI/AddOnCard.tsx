// components/AddOnCard.tsx
import styled from "styled-components"
import { useFormContext } from "../../utils/formContext"

const CardContainer = styled.div<{ $border?: string }>`
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
  align-items: center;
  padding: 20px 10px;
  border-radius: 5px;
  cursor: pointer;
  :last-child {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Input = styled.input`
  padding: 15px;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-right: 20px;
  border-radius: 5px;
  font-weight: bold;
  color: #9699ab;
  width: 20px;
  height: 20px;
`

const Title = styled.p`
  font-weight: bold;
  color: hsl(213, 96%, 18%);
`

const SubTitle = styled.p`
  color: #9699ab;
  padding-top: 5px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Price = styled.p`
  color: hsl(213, 96%, 18%);
`

import React from "react"

type AddOnCardProps = {
  title: string
  subtitle: string
  price: {
    monthly: string
    yearly: string
  }
  selected: boolean
  onToggle: () => void
}

const AddOnCard: React.FC<AddOnCardProps> = ({
  title,
  subtitle,
  price,
  selected,
  onToggle,
}) => {
  const [{ stepTwo }, dispatch] = useFormContext()
  const isYearly = stepTwo.isYearly
  return (
    <CardContainer
      onClick={onToggle}
      style={{
        border: selected ? "1px solid #473dff" : "1px solid #9699ab",
        backgroundColor: selected ? "#483eff24" : "#fff",
      }}
    >
      <Input type='checkbox' checked={selected} onChange={onToggle} />
      <div>
        <div>
          <Title>{title}</Title>
        </div>
        <div>
          <SubTitle>{subtitle}</SubTitle>
        </div>
      </div>
      <div>
        <div>
          <Price>{isYearly ? price.yearly : price.monthly}</Price>
        </div>
      </div>
    </CardContainer>
  )
}

export default AddOnCard
