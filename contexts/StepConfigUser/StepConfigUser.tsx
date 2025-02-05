import { createContext, useState } from 'react'
import { StepConfigUserContextType, StepConfigUserProviderProps } from './StepConfigUser.types'

export const StepConfigUserContext = createContext<StepConfigUserContextType> ({
    step: 1,
    setStep: () => {},
    infoUser: {
        typeUser: '',
        name: '',
        platforms: [],
        avatarUrl: '',
        username: ''
    },
    setInfoUser: () => {},
    totalSteps: 0,
    nextStep: () => {},
    prevStep: () => {}
})

export function StepConfigUserProvider({ 
    children,
 }: StepConfigUserProviderProps) {
    const [step, setStep] = useState(1)
    const [infoUser, setInfoUser] = useState<StepConfigUserContextType["infoUser"]>({
        typeUser: '',
        name: '',
        platforms: [],
        avatarUrl: '',
        username: ''
    })
    const totalSteps = 5

    const nextStep = () => {
        setStep((prevStep) => step + 1)
    }

    const prevStep = () => {
        setStep((prevStep) => step - 1)
    }

    const data = {
        step,
        setStep,
        infoUser,
        setInfoUser,
        totalSteps,
        nextStep,
        prevStep
    }

    return (
        <StepConfigUserContext.Provider value={data}>
            {children}
        </StepConfigUserContext.Provider>
    )
 }