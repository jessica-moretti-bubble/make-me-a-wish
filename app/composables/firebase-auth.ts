import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../composables/firebase.config.js";
import { FirebaseError } from "firebase/app";
import { useAuthStore } from "~/stores/auth.store.js";
import { getFirebaseErrorMessage } from "~/config/auth/firebase-error-message.js";

export async function registerUser(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password).catch(
    (error: unknown) => {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error);
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

export async function loginUser(email: string, password: string) {
  const authStore = useAuthStore();

  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      authStore.setUser(email, undefined);
      /*  const usersData = await getCollectionData<UserProfile>("users");
      const completedProfile = usersData.find(
        (profile) => profile.id === user.uid
      );
      if (completedProfile) {
        authStore.setUser(email, completedProfile.username);
      }*/

      return { user };
    })
    .catch((error: unknown) => {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error);
        return { error: message };
      } else if (error instanceof Error) {
        const message = getFirebaseErrorMessage(error);
        return { error: message };
      } else {
        return { error: "Errore sconosciuto durante il login." };
      }
    });
}
