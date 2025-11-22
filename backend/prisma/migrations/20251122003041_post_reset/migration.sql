-- DropIndex
DROP INDEX "public"."idx_block_trgm";

-- DropIndex
DROP INDEX "public"."idx_district_trgm";

-- DropIndex
DROP INDEX "public"."idx_state_trgm";

-- DropIndex
DROP INDEX "public"."idx_village_trgm";

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "pinCode" TEXT;
