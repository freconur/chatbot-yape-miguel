


import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";
import { ValuesAction, ValuesProject} from "../types/types";
import { projectReducer } from "../reducer/projectReducer";

interface Props {
  children: ReactNode
}
const initialState: ValuesProject = {
  valuesProyectoUno:{},
  customer:{}
}

export const GlobalContext = createContext<[ValuesProject, Dispatch<ValuesAction>]>([initialState, () => { }])
// export const Attendance = createContext<Student>({studentData: {}})

export const useGlobalContext = () => useContext(GlobalContext)[0]
export const useGlobalContextDispatch = () => useContext(GlobalContext)[1]

export const GlobalContextProvider = ({ children }: Props) => {

  return (
    <GlobalContext.Provider value={useReducer(projectReducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  )
}