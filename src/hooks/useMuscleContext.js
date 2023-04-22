import { useContext } from "react"
import { MuscleContext } from "../MuscleContext/MuscleContext"

export const useMuscleContext =() =>{
    return useContext(MuscleContext)
}