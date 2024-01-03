/* In the context, there is an initial state object and a formReducer function, which updates the state based on the dispatched actions.

The FormProvider component uses React's useReducer hook to manage the state and make it available to all its child components.

The useFormContext hook is a convenience function that you can call from any component to get access to the form state and dispatch function.*/

import React, { createContext, useContext, useReducer } from "react"

type AddOn = {
  title: string
  subtitle: string
  price: string
  selected: boolean
}

type StateType = {
  currentStep: number
  stepOne: {
    name: string
    email: string
    phone: string
  }
  stepTwo: {
    isYearly: boolean
    plan: string
    paymentType: boolean
    planPrices: {
      Arcade: { monthly: number; yearly: number }
      Advanced: { monthly: number; yearly: number }
      Pro: { monthly: number; yearly: number }
    }
  }
  stepThree: AddOn[]
}

const initialState: StateType = {
  currentStep: 1,
  stepOne: {
    name: "",
    email: "",
    phone: "",
  },
  stepTwo: {
    plan: "",
    paymentType: false,
    planPrices: {
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 },
    },
    isYearly: false,
  },
  stepThree: [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      price: "+$1/mo",
      selected: false,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: "+$2/mo",
      selected: false,
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: "+$2/mo",
      selected: false,
    },
  ],
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
        plan: string
        paymentType: boolean
        isYearly: boolean
        planPrices: {
          Arcade: { monthly: number; yearly: number }
          Advanced: { monthly: number; yearly: number }
          Pro: { monthly: number; yearly: number }
        }
      }
    }
  | { type: "SET_STEP_THREE"; payload: AddOn[] }

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
