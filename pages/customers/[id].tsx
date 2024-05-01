import { useGlobalContext } from '@/features/context/GlobalContext'
import { useCustomer } from '@/features/hooks/useCustomers'
import { useGetValuesProductoUno } from '@/features/hooks/useGetValuesProductoUno'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ProductoUnoDeUsuario = () => {
  const { getProductoUno} = useGetValuesProductoUno()
  const { customer, valuesProyectoUno } = useGlobalContext()

const { getCustomer } = useCustomer()
  const router = useRouter()

  useEffect(() => {
    getProductoUno()
  },[])
  useEffect(() => {
    if(router.query.id){
      getCustomer(`${router.query.id}`)
    }
  },[router?.query?.id])

  return (
    <div className='p-2'>
      <h1 className='w-full text-left text-xl'>
        <p className='text-slate-500 '>Hola <span className='font-semibold uppercase'>{customer.name} {customer.lastname} {customer.firstname}</span>, te enviamos tu producto, muchas gracias por tu preferencia.</p>
      </h1>
      <div className='mt-5 bg-white shadow-md p-2 rounded-md'>
        <div>
          <h3 className='text-emerald-500 font-semibold capitalize'>1. consejo uno</h3>
          <p className='text-slate-400 text-lg pl-5'>{valuesProyectoUno.uno}</p>
        </div>
        <div>
          <h3 className='text-emerald-500 font-semibold capitalize'>2. consejo dos</h3>
          <p className='text-slate-400 text-lg pl-5'>{valuesProyectoUno.dos}</p>
        </div>
        <div>
          <h3 className='text-emerald-500 font-semibold capitalize'>3. consejo tres</h3>
          <p className='text-slate-400 text-lg pl-5'>{valuesProyectoUno.tres}</p>
        </div>
        <div>
          <h3 className='text-emerald-500 font-semibold capitalize'>4. consejo cuatro</h3>
          <p className='text-slate-400 text-lg pl-5'>{valuesProyectoUno.cuatro}</p>
        </div>
        <div>
          <h3 className='text-emerald-500 font-semibold capitalize'>5. consejo cinco</h3>
          <p className='text-slate-400 text-lg pl-5'>{valuesProyectoUno.cinco}</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductoUnoDeUsuario