ALTER TABLE "authentication"."user" ALTER COLUMN "username" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "emailVerified" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "terms_accepted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "terms_accepted_at" SET NOT NULL;