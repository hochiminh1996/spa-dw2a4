import { PrismaClient } from "@prisma/client";


//FAZENDO  INSERÇAÕ
export const prisma = new PrismaClient({
    log: ['query']
});