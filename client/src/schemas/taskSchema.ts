import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters.")
    .max(50, "Title must be at most 50 characters.")
    .transform((val) => val.trim().replace(/\s+/g, " ")),
  description: z
    .string()
    .max(200, "Description must be at most 200 characters.")
    .transform((val) => val.trim().replace(/\s+/g, " ")),
});

export type TaskSchemaValues = z.infer<typeof taskSchema>;
