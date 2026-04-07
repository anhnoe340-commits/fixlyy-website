import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string().min(2, "Prénom trop court").max(50, "Prénom trop long"),
  email: z.string().email("Format email invalide"),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro invalide (ex: 06 12 34 56 78)"),
  job: z.array(z.string()).min(1, "Sélectionnez au moins un métier")
});
