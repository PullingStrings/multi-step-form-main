// components/ToggleSwitch.tsx

import React from "react"

type ToggleSwitchProps = {
  isYearly: boolean
  onToggle: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isYearly, onToggle }) => (
  <div
    onClick={onToggle}
    style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}
  >
    <div style={{ padding: "10px" }}>Monthly</div>
    <div
      style={{
        position: "relative",
        background: isYearly ? "#000" : "#ddd",
        borderRadius: "50px",
        width: "50px",
        height: "25px",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "#fff",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          top: "2.5px",
          left: isYearly ? "25px" : "2.5px",
          transition: "left 0.2s",
        }}
      />
    </div>
    <div style={{ padding: "10px" }}>Yearly</div>
  </div>
)

export default ToggleSwitch
