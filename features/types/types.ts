import { ProyectoUnoActions } from "../actions/actionsValues";

export interface ProyectoUno {
  uno?:string,
  dos?:string,
  tres?:string,
  cuatro?:string,
  cinco?:string,
}
export interface Customer {
  name?:string,
  firstname?:string,
  lastname?:string
}
export type ValuesProject = {
  valuesProyectoUno:ProyectoUno,
  customer:Customer
}

export type ValuesAction =
| { type: ProyectoUnoActions.GET_VALUES_PROYECTO_UNO; payload: ProyectoUno }
| { type: ProyectoUnoActions.GET_CUSTOMER; payload: Customer }