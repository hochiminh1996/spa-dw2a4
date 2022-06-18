import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";



export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({name, email,type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
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