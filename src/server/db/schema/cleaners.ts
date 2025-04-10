import { sql } from "drizzle-orm";
import { uuid, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createTable } from "./_table";

export const cleaners = createTable("cleaners", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  status: varchar("status", { length: 20 }).default("active"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdateFn(() => sql`now()`),
});
