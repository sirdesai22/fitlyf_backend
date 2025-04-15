import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  weight: integer().notNull(),
  height: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


