import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
  type User,
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

type LoginResponse = {
  user: User | null;
  error: string | null;
};

export function loginUser(data: AuthPayload): Promise<LoginResponse> {
  const { email, password } = data;
  const authStore = useAuthStore();

  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const idToken = await getIdToken(user);
      const refreshToken = user.refreshToken;

      authStore.setUser(email, undefined);
      authStore.setTokens(idToken, refreshToken);

      return { user, error: null };
    })
    .catch((err: unknown) => {
      const errorMessage =
        err instanceof FirebaseError
          ? getFirebaseErrorMessage(err)
          : err instanceof Error
          ? err.message
          : "Errore sconosciuto durante il login.";

      return { user: null, error: errorMessage };
    });
}
