import ProductoUnoForm from '@/components/producto-uno-form'
import { useGlobalContext } from '@/features/context/GlobalContext'
import { useGetValuesProductoUno } from '@/features/hooks/useGetValuesProductoUno'
import { ProyectoUno } from '@/features/types/types'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useEffect, useRef, useState } from 'react'

const ProductoUno = () => {
  const initialValues = { uno: "", dos: "", tres: "", cuatro: "", cinco: "" }
  const [getValues, setGetVaues] = useState<ProyectoUno>(initialValues)
  const { getProductoUno } = useGetValuesProductoUno()
  const { valuesProyectoUno } = useGlobalContext()

  const pdfRef = useRef(null)
  useEffect(() => {
    getProductoUno()
  }, [])

  const onDownloadPdf = () => {
    const input: any = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('landscape', 'mm', 'a4', true)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imageWidth = canvas.width
      const imageHeight = canvas.height
      const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight)
      const imgX = (pdfWidth - imageWidth * ratio) / 2
      const imgY = 30
      pdf.addImage(imgData, 'PNG', imgX, imgY, imageWidth * ratio, imageHeight * ratio)
      pdf.save(`prueba.pdf`)

    })
  }

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
      <div id="dowloadpdf" onClick={onDownloadPdf} className='pd-3 rounded-md shadow-md bg-green-400'>descargar pdf</div>
      <div ref={pdfRef}>
        <h1 className='font-semibold text-2xl text-slate-600 uppercase text-center'>Producto uno</h1>
        <ProductoUnoForm getValues={getValues} onChangeValues={onChangeValues} />
      </div>
    </div>
  )
}

export default ProductoUno