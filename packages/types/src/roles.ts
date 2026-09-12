export const USER_ROLES = ["patient", "doctor", "receptionist", "admin", "super_admin"] as const;

export type UserRole = (typeof USER_ROLES)[number];
