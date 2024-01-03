// components/AddOnCard.tsx
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  align-items: center;
`

const Input = styled.input`
  padding: 15px;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-right: 20px;
  border-radius: 5px;
  font-weight: bold;
  color: #eee;
  width: 20px;
  height: 20px;
`

const Title = styled.p`
  font-weight: bold;
  color: hsl(213, 96%, 18%);
`

const SubTitle = styled.p`
  color: grey;
`

import React from "react"

type AddOnCardProps = {
  title: string
  subtitle: string
  price: string
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
  return (
    <CardContainer
      onClick={onToggle}
      style={{ border: selected ? "2px solid #000" : "none" }}
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
        <div>{price}</div>
      </div>
    </CardContainer>
  )
}

export default AddOnCard
