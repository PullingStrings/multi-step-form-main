/* In the context, there is an initial state object and a formReducer function, which updates the state based on the dispatched actions.

The FormProvider component uses React's useReducer hook to manage the state and make it available to all its child components.

The useFormContext hook is a convenience function that you can call from any component to get access to the form state and dispatch function.*/

import React, { createContext, useContext, useReducer } from "react"

type StateType = {
  currentStep: number
  stepOne: {
    name: string
    email: string
    phone: string
  }
  stepTwo: {
    plan: "arcade" | "advanced" | "pro"
    paymentType: "monthly" | "yearly"
  }
  stepThree: {
    addons: string[]
  }
}

const initialState: StateType = {
  currentStep: 1,
  stepOne: {
    name: "e.g. Stephen King",
    email: "e.g.stephenking@lorem.com",
    phone: "e.g. +44 1234567890",
  },
  stepTwo: {
    plan: "arcade",
    paymentType: "monthly",
  },
  stepThree: {
    addons: [],
  },
}

type ActionType =
  | { type: "SET_STEP"; payload: number }
  | {
      type: "SET_STEP_ONE"
      payload: { name: string; email: string; phone: string }
    }
  | {
      type: "SET_STEP_TWO"
      payload: {
        plan: "arcade" | "advanced" | "pro"
        paymentType: "monthly" | "yearly"
      }
    }
  | { type: "SET_STEP_THREE"; payload: { addons: string[] } }

const FormContext = createContext<[StateType, React.Dispatch<ActionType>]>([
  {} as StateType,
  () => {},
])

const formReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, currentStep: action.payload }
    case "SET_STEP_ONE":
      return { ...state, stepOne: action.payload }
    case "SET_STEP_TWO":
      return { ...state, stepTwo: action.payload }
    case "SET_STEP_THREE":
      return { ...state, stepThree: action.payload }
    default:
      return state
  }
}

export const FormProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
