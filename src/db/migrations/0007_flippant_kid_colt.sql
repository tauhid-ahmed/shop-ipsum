ALTER TABLE "authentication"."user" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "terms_accepted" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "terms_accepted_at" DROP NOT NULL;