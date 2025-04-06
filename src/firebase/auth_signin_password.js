import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function getErrorMessage(msg){
  switch (msg) {
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password.';
    case 'auth/missing-password':
      return 'Please enter a password.';
    default:
      return 'Something went wrong. Please try again.';
  }
}

export async function loginWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true};
  } catch (error) {
    return { success: false, error: getErrorMessage(error.message) };
  }
}