import React, { useState } from "react"
import { useFormContext } from "../../utils/formContext"
import StepsSideBar from "../UI/StepsSideBar"
import styled from "styled-components"

const CustomErrors = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    color: #ef3232;
    font-size: 12px;
  }
`

const StepOne: React.FC = () => {
  const [{ stepOne }, dispatch] = useFormContext()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const stepOneState = 1

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
    if (!stepOne.phone.trim()) newErrors.phone = "This field is required"

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
    <>
      <StepsSideBar steps={stepOneState} />
      <div className='form-main-container'>
        <div className='titles'>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form className='multi-step-form' onSubmit={handleSubmit}>
          <CustomErrors>
            <label htmlFor='name'>Name</label>
            {errors.name && <p>{errors.name}</p>}
          </CustomErrors>
          <input
            id='name'
            placeholder='e.g. Stephen King'
            name='name'
            value={stepOne.name}
            onChange={handleChange}
          />

          <CustomErrors>
            <label htmlFor='email'>Email Address</label>
            {errors.email && <p>{errors.email}</p>}
          </CustomErrors>

          <input
            id='email'
            placeholder='e.g. stephenking@lorem.com'
            name='email'
            value={stepOne.email}
            onChange={handleChange}
          />

          <CustomErrors>
            <label htmlFor='phone'>Phone Number</label>
            {errors.phone && <p>{errors.phone}</p>}
          </CustomErrors>
          <input
            id='phone'
            placeholder='e.g. +1 234 567 890'
            name='phone'
            value={stepOne.phone}
            onChange={handleChange}
          />

          <button className='next-button' type='submit'>
            Next Step
          </button>
        </form>
      </div>
    </>
  )
}

export default StepOne
