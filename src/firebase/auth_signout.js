import { auth } from './firebase';
import { signOut } from "firebase/auth";

export async function signOutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.code };
  }
}