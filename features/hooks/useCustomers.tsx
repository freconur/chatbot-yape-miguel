import { app } from "@/firebase/firebase.config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useGlobalContextDispatch } from "../context/GlobalContext";
import { ProyectoUnoActions } from "../actions/actionsValues";
const db = getFirestore(app)





export const useCustomer = () => {
  const dispatch = useGlobalContextDispatch()
  const getCustomer = async (dni: string) => {
    const docRef = doc(db, "/customers", `${dni}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({ type: ProyectoUnoActions.GET_CUSTOMER, payload: docSnap.data() })
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }


  return { getCustomer }
} 