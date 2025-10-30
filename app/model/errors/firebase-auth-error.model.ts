export enum FirebaseAuthErrorCode {
  USER_DISABLED = "auth/user-disabled",
  USER_NOT_FOUND = "auth/user-not-found",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  TOO_MANY_REQUESTS = "auth/too-many-requests",
  NETWORK_REQUEST_FAILED = "auth/network-request-failed",
  INVALID_CREDENTIAL = "auth/invalid-credential",
}

export const firebaseAuthErrorMessages: Record<FirebaseAuthErrorCode, string> =
  {
    [FirebaseAuthErrorCode.USER_DISABLED]:
      "Questo account è stato disabilitato.",
    [FirebaseAuthErrorCode.USER_NOT_FOUND]:
      "Nessun utente trovato con questa email.",
    [FirebaseAuthErrorCode.EMAIL_ALREADY_IN_USE]:
      "Questa email è già registrata.",
    [FirebaseAuthErrorCode.TOO_MANY_REQUESTS]:
      "Troppi tentativi. Riprova più tardi.",
    [FirebaseAuthErrorCode.NETWORK_REQUEST_FAILED]:
      "Errore di rete. Controlla la connessione.",
    [FirebaseAuthErrorCode.INVALID_CREDENTIAL]: "Credenziali non valide.",
  };
