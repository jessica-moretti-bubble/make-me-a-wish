import type { FirebaseError } from "firebase/app";
import { FirebaseAuthErrorCode } from "~/model/errors/firebase-auth-error.model";

export const firebaseErrorMessages: Record<FirebaseAuthErrorCode, string> = {
  [FirebaseAuthErrorCode.INVALID_CREDENTIAL]: "Credenziali non valide.",
  [FirebaseAuthErrorCode.EMAIL_ALREADY_IN_USE]:
    "Questa email è già registrata.",
  [FirebaseAuthErrorCode.TOO_MANY_REQUESTS]:
    "Troppi tentativi. Riprova più tardi.",
  [FirebaseAuthErrorCode.NETWORK_REQUEST_FAILED]:
    "Errore di rete. Controlla la connessione.",
  [FirebaseAuthErrorCode.USER_DISABLED]: "Utente disabilitato",
  [FirebaseAuthErrorCode.USER_NOT_FOUND]: "Utente non trovato",
};

export function getFirebaseErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "code" in error) {
    const code = (error as FirebaseError).code as FirebaseAuthErrorCode;
    const message = firebaseErrorMessages[code];
    return message || "Si è verificato un errore sconosciuto.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Errore sconosciuto.";
}
