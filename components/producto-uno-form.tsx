import { useGetValuesProductoUno } from '@/features/hooks/useGetValuesProductoUno'
import { ProyectoUno } from '@/features/types/types'
import React from 'react'

interface Props {
  onChangeValues: (e: React.ChangeEvent<HTMLInputElement>) => void,
  getValues: ProyectoUno,
}
const ProductoUnoForm = ({ getValues, onChangeValues }: Props) => {
  const { updateProductUno } = useGetValuesProductoUno()

  return (
    <div>
      <div >
        <p className='font-semibold text-xl text-slate-400'>1.</p>
        <input value={getValues?.uno} name="uno" onChange={onChangeValues} className='text-slate-500 w-full p-3 border-[1px] border-slate-400 rounded-md' type="text" placeholder='uno' />
      </div>
      <div >
        <p className='font-semibold text-xl text-slate-400'>2.</p>
        <input value={getValues?.dos} name="dos" onChange={onChangeValues} className='text-slate-500 w-full p-3 border-[1px] border-slate-400 rounded-md' type="text" placeholder='dos' />
      </div>
      <div >
        <p className='font-semibold text-xl text-slate-400'>3.</p>
        <input value={getValues?.tres} name="tres" onChange={onChangeValues} className='text-slate-500 w-full p-3 border-[1px] border-slate-400 rounded-md' type="text" placeholder='tres' />
      </div>
      <div >
        <p className='font-semibold text-xl text-slate-400'>4.</p>
        <input value={getValues?.cuatro} name="cuatro" onChange={onChangeValues} className='text-slate-500 w-full p-3 border-[1px] border-slate-400 rounded-md' type="text" placeholder='cuatro' />
      </div>
      <div >
        <p className='font-semibold text-xl text-slate-400'>5.</p>
        <input value={getValues?.cinco} name="cinco" onChange={onChangeValues} className='text-slate-500 w-full p-3 border-[1px] border-slate-400 rounded-md' type="text" placeholder='cinco' />
      </div>
      <div onClick={() => updateProductUno(getValues)} className='hover:bg-yellow-300 duration-300 w-full p-3 rounded-md shadow-md bg-yellow-400 text-center font-semibold cursor-pointer mt-4 capitalize'>actualizar</div>
    </div>
  )
}

export default ProductoUnoForm