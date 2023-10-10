// components/AddOnCard.tsx

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
    <div
      onClick={onToggle}
      style={{ border: selected ? "2px solid #000" : "none" }}
    >
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{price}</div>
      <input type='checkbox' checked={selected} onChange={onToggle} />
    </div>
  )
}

export default AddOnCard
