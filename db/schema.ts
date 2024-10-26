import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	photoUrl: varchar({ length: 255 }),
	profession: varchar({ length: 255 }),
	email: varchar({ length: 255 }).notNull().unique(),
})
