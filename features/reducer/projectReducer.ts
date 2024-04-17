import { ProyectoUnoActions } from "../actions/actionsValues";
import { ValuesAction, ValuesProject } from "../types/types";




export const projectReducer = (state: ValuesProject, action: ValuesAction) => {
  switch (action.type) {
    case ProyectoUnoActions.GET_VALUES_PROYECTO_UNO:
      return {
        ...state,
        valuesProyectoUno: action.payload
      }

    case ProyectoUnoActions.GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      }
    default:
      return state
  }
}