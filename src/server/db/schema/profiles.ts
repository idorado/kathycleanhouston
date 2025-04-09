import { text, uuid, timestamp } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { createTable } from "./_table"


export const profiles = createTable("profiles", {
    id: uuid("id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    image: text("image").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull(),
    address: text("address").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
