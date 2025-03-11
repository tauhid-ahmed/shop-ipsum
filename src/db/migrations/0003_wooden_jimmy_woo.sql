ALTER TABLE "authentication"."user" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "authentication"."user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");