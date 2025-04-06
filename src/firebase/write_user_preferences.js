import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(); 
const auth = getAuth();   

export async function writeUserPreferences(data) {
  const userId = auth.currentUser?.uid;

  if (!userId) {
    throw new Error("User not logged in");
  }

  const userRef = doc(db, "users", userId); 
  await setDoc(userRef, data);
}