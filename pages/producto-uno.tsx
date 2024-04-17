import ProductoUnoForm from '@/components/producto-uno-form'
import { useGlobalContext } from '@/features/context/GlobalContext'
import { useGetValuesProductoUno } from '@/features/hooks/useGetValuesProductoUno'
import { ProyectoUno } from '@/features/types/types'
import React, { useEffect, useState } from 'react'

const ProductoUno = () => {
  const initialValues = { uno: "", dos: "", tres: "", cuatro: "", cinco: "" }
  const [getValues, setGetVaues] = useState<ProyectoUno>(initialValues)
  const { getProductoUno} = useGetValuesProductoUno()
  const { valuesProyectoUno } = useGlobalContext()

  useEffect(() => {
    getProductoUno()
  }, [])

  useEffect(() => {
      setGetVaues(valuesProyectoUno)
  }, [valuesProyectoUno])
  // console.log('valuesProyectoUno', valuesProyectoUno)
  const onChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetVaues({
      ...getValues,
      [e.target.name]: e.target.value
    })
  }
  console.log('getValues', getValues)
  return (
    <div className='p-2'>
      <h1 className='font-semibold text-2xl text-slate-600 uppercase text-center'>Producto uno</h1>
      <ProductoUnoForm getValues={getValues} onChangeValues={onChangeValues} />
    </div>
  )
}

export default ProductoUno