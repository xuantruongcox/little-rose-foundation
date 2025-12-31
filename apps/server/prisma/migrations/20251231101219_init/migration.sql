-- DropIndex
DROP INDEX "donations_gatewayTransactionId_key";

-- AlterTable
ALTER TABLE "donations" ALTER COLUMN "paymentCode" DROP NOT NULL;
