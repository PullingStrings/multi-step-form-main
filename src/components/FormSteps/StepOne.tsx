// components/StepOne.tsx

import React, { useState } from "react"
import { useFormContext } from "../../utils/formContext"

const StepOne: React.FC = () => {
  const [{ stepOne }, dispatch] = useFormContext()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const newErrors = validateFields()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      // If validation passes, go to the next step
      dispatch({ type: "SET_STEP", payload: 2 })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    dispatch({
      type: "SET_STEP_ONE",
      payload: { ...stepOne, [name]: value },
    })
  }

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {}

    // Check if fields are empty
    if (!stepOne.name.trim()) newErrors.name = "Name is required"
    if (!stepOne.email.trim()) newErrors.email = "Email is required"
    if (!stepOne.phone.trim()) newErrors.phone = "Phone number is required"

    // Check if email is valid
    if (
      stepOne.email.trim() &&
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(stepOne.email)
    ) {
      newErrors.email = "Please enter a valid email"
    }

    return newErrors
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        name='name'
        value={stepOne.name}
        onChange={handleChange}
        required
      />

      {errors.name && <p>{errors.name}</p>}

      <label htmlFor='email'>Email:</label>
      <input
        id='email'
        name='email'
        value={stepOne.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor='phone'>Phone:</label>
      <input
        id='phone'
        name='phone'
        value={stepOne.phone}
        onChange={handleChange}
        required
      />
      {errors.phone && <p>{errors.phone}</p>}

      <button type='submit'>Next</button>
    </form>
  )
}

export default StepOne
