import React from "react"
import StepOne from "@/components/FormSteps/StepOne"
import StepTwo from "@/components/FormSteps/StepTwo"
import StepThree from "@/components/FormSteps/StepThree"
import StepFour from "@/components/FormSteps/StepFour"
import { useFormContext } from "@/utils/formContext"

export default function Home() {
  const [{ currentStep }] = useFormContext()
  return (
    <div>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
    </div>
  )
}
