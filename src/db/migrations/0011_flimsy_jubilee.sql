CREATE TYPE "public"."user_role" AS ENUM('user', 'admin', 'superadmin');--> statement-breakpoint
ALTER TABLE "authentication"."user" ADD COLUMN "role" "user_role" DEFAULT 'user' NOT NULL;