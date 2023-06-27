// components/StepTwo.tsx

import React from "react"
import { useFormContext } from "../../utils/formContext"

const StepTwo: React.FC = () => {
  const [{ stepTwo }, dispatch] = useFormContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    dispatch({
      type: "SET_STEP_TWO",
      payload: { ...stepTwo, [name]: value },
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Validate and save data, then go to next step
    // dispatch({ type: 'SET_STEP', payload: 3 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='plan'>Plan:</label>
      <select
        id='plan'
        name='plan'
        value={stepTwo.plan}
        onChange={handleChange}
        required
      >
        <option value=''>--Please choose an option--</option>
        <option value='arcade'>Arcade</option>
        <option value='advanced'>Advanced</option>
        <option value='pro'>Pro</option>
      </select>

      <label htmlFor='payment'>Payment:</label>
      <select
        id='payment'
        name='payment'
        value={stepTwo.paymentType}
        onChange={handleChange}
        required
      >
        <option value=''>--Please choose an option--</option>
        <option value='monthly'>Monthly</option>
        <option value='yearly'>Yearly</option>
      </select>

      <button type='submit'>Next</button>
    </form>
  )
}

export default StepTwo
