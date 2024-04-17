import { app } from "@/firebase/firebase.config"
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"
import { useGlobalContextDispatch } from "../context/GlobalContext"
import { ProyectoUnoActions } from "../actions/actionsValues"
import { ProyectoUno } from "../types/types"

const db = getFirestore(app)

export const useGetValuesProductoUno = () => {
  const dispatch = useGlobalContextDispatch()
  const getProductoUno = async () => {
    // const ref = doc(db,`/productos/SmKCEtWT4qfHi2OWt2FK/producto1`)

    const docRef = doc(db, `/productos/SmKCEtWT4qfHi2OWt2FK/producto1`, "1JOa086NT8PY6vmoO08Y");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const rta = docSnap?.data()
      dispatch({ type: ProyectoUnoActions.GET_VALUES_PROYECTO_UNO, payload: rta })
      // dispatch({ type: AttendanceRegister.RESUME_ATTENDANCE_STUDENT, payload: arrivalTimeFromStudent })

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }


  const updateProductUno = async (data: ProyectoUno) => {
    const docRef = doc(db, `/productos/SmKCEtWT4qfHi2OWt2FK/producto1`, "1JOa086NT8PY6vmoO08Y");
    await updateDoc(docRef, {
      uno: data.uno,
      dos: data.dos,
      cuatro: data.cuatro,
      cinco: data.cinco,
      tres: data.tres,
    });
  }
  return { getProductoUno, updateProductUno }
}


