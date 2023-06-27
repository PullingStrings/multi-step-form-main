import React from "react"
import StepOne from "@/components/FormSteps/StepOne"
import StepTwo from "@/components/FormSteps/StepTwo"
import { useFormContext } from "@/utils/formContext"

export default function Home() {
  const [{ currentStep }] = useFormContext()
  return (
    <div>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
    </div>
  )
}
