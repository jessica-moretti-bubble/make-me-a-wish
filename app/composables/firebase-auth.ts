import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../composables/firebase.config.js";
import { FirebaseError } from "firebase/app";
import { useAuthStore } from "~/stores/auth.store.js";
import { getFirebaseErrorMessage } from "~/config/auth/firebase-error-message.js";
import type { AuthPayload } from "~/schemas/auth/auth.schema.js";

export async function registerUser(data: AuthPayload) {
  const { email, password } = data;
  await createUserWithEmailAndPassword(auth, email, password).catch(
    (error: unknown) => {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error);
        console.log(message);
        return message;
      } else if (error instanceof Error) {
        const message = getFirebaseErrorMessage(error);
        return message;
      } else {
        console.error("Errore sconosciuto:", error);
      }
    }
  );
}

export function loginUser(data: AuthPayload) {
  const { email, password } = data;
  const authStore = useAuthStore();

  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential: UserCredential) => {
      const user = userCredential.user;

      const idToken = await getIdToken(user);
      const refreshToken = user.refreshToken;

      authStore.setUser(email, undefined);
      authStore.setTokens(idToken, refreshToken);

      return { user };
    })
    .catch((error: unknown) => {
      if (error instanceof FirebaseError) {
        return { error: getFirebaseErrorMessage(error) };
      } else if (error instanceof Error) {
        return { error: getFirebaseErrorMessage(error) };
      } else {
        return { error: "Errore sconosciuto durante il login." };
      }
    });
}
