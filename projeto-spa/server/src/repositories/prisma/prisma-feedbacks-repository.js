"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaFeedbacksRepository {
    async create({ name, email, type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                name,
                email,
                type,
                comment,
                screenshot,
            }
        });
    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
