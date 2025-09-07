import z from "zod";

// Role enum
export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  RECEIVER = "RECEIVER",
  SENDERS = "SENDERS",
  RIDER = "RIDER",
}

// IsActive enum
export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

// Zod schema
export const userFormSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  role: z.nativeEnum(Role, {
    error: "Role is required",
  }),
  phone: z
            .string()
            .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
                message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
            })
            .optional(),
  isActive: z.nativeEnum(IsActive, {
    error: "Activity status is required",
  }),
});

// Infer TypeScript type from schema
export type UserSchemaType = z.infer<typeof userFormSchema>;