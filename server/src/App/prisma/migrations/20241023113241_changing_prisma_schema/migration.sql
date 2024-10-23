/*
  Warnings:

  - You are about to alter the column `doctor_id` on the `LabReports` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctor_id` on the `MainMedication` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctor_id` on the `MedicalReports` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctor_id` on the `OPDTreatments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctor_id` on the `PatientMedication` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `Staff_id` on the `Staff` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctor_id` on the `SurgeryRecords` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `user_id` on the `notes` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "LabReports" DROP CONSTRAINT "labreports_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "MainMedication" DROP CONSTRAINT "MainMedication_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "MedicalReports" DROP CONSTRAINT "medicalreports_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "OPDTreatments" DROP CONSTRAINT "opdtreatments_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "SurgeryRecords" DROP CONSTRAINT "surgeryrecords_doctor_id_foreign";

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_user_id_foreign";

-- AlterTable
ALTER TABLE "LabReports" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "MainMedication" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "MedicalReports" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OPDTreatments" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "PatientMedication" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_pkey",
ALTER COLUMN "Staff_id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("Staff_id");

-- AlterTable
ALTER TABLE "SurgeryRecords" ALTER COLUMN "doctor_id" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "user_id" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "LabReports" ADD CONSTRAINT "labreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalReports" ADD CONSTRAINT "medicalreports_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MainMedication" ADD CONSTRAINT "MainMedication_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OPDTreatments" ADD CONSTRAINT "opdtreatments_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SurgeryRecords" ADD CONSTRAINT "surgeryrecords_doctor_id_foreign" FOREIGN KEY ("doctor_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "Staff"("Staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
