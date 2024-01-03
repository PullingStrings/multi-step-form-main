// components/ToggleSwitch.tsx

import React from "react"

type ToggleSwitchProps = {
  isYearly: boolean
  onToggle: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isYearly, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      margin: "20px 0px",
      padding: "5px 0px",
      background: "#d6d9e6",
      borderRadius: "3px",
      justifyContent: "center",
    }}
  >
    <div style={{ padding: "10px" }}>
      <p
        style={{
          color: isYearly ? "grey" : "#032a5a",
          fontWeight: isYearly ? "normal" : "bold",
        }}
      >
        Monthly
      </p>
    </div>
    <div
      style={{
        position: "relative",
        background: isYearly ? "#000" : "#032a5a",
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
    <div style={{ padding: "10px" }}>
      <p
        style={{
          color: isYearly ? "#032a5a" : "grey",
          fontWeight: isYearly ? "bold" : "normal",
        }}
      >
        Yearly
      </p>
    </div>
  </div>
)

export default ToggleSwitch
