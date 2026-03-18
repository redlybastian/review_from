import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const reviews = pgTable("reviews", {
  // 1. A unique ID that increases automatically (1, 2, 3...)
  id: serial("id").primaryKey(),

  // 2. The reviewer's name
  name: text("name").notNull(),

  // 3. The reviewer's email
  email: text("email").notNull(),

  // 4. The actual review text
  content: text("content").notNull(),

  // 5. When it was created (defaults to the current time)
  createdAt: timestamp("created_at").defaultNow().notNull(),

  // Architect's Tip: Adding an updatedAt column
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// This type is for when you SELECT (read) a review from the DB
export type Review = InferSelectModel<typeof reviews>;

// This type is for when you INSERT (create) a new review
export type NewReview = InferInsertModel<typeof reviews>;