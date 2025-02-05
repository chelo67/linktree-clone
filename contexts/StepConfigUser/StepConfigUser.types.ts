import {ReactNode} from 'react'

export type StepConfigUserContextType = {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
    infoUser: infoUserType
    setInfoUser: React.Dispatch<React.SetStateAction<any>>
    totalSteps: number
    nextStep: () => void
    prevStep: () => void
}

type infoUserType = {
    typeUser: string
    name: string
    platforms: {
        icon: string
        link: string
        name: string
    } []
    avatarUrl: string
    username: string
}

export type StepConfigUserProviderProps = {
    children: ReactNode
}