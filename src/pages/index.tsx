import React, { useEffect, useState } from "react"
import StepOne from "@/components/FormSteps/StepOne"
import StepTwo from "@/components/FormSteps/StepTwo"
import StepThree from "@/components/FormSteps/StepThree"
import StepFour from "@/components/FormSteps/StepFour"
import StepThankYou from "@/components/FormSteps/StepThankYou"
import { useFormContext } from "@/utils/formContext"
import GlobalStyles from "@/styles/GlobalStyles"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  border-radius: 10px;
`
const StepsContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  background: white;
  gap: 25px;
  border-radius: 10px;
  width: 100%;
  justify-content: center;
`

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [{ currentStep }] = useFormContext()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <Container>
          <GlobalStyles />
          <StepsContainer>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            {currentStep === 5 && <StepThankYou />}
          </StepsContainer>
        </Container>
      )}
    </>
  )
}
