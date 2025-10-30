import { z } from "zod";

export const AuthPayloadSchema = z.object({
  email: z
    .string()
    .min(1, "L'email è obbligatoria")
    .email("Formato email non valido"),
  password: z
    .string()
    .min(1, "La password è obbligatoria")
    .min(6, "La password deve contenere almeno 6 caratteri"),
});
export type AuthPayload = z.infer<typeof AuthPayloadSchema>;
