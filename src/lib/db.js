import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
export const db = globalForPrisma.__dawai24Prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.__dawai24Prisma = db;
