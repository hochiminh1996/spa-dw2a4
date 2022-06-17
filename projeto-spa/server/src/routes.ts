import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCases } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();



routes.post("/feedbacks", async (req, res) => {
    const { name, email, type, comment, datatual, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();


    const submitFeedbackUseCase = new SubmitFeedbackUseCases(
        prismaFeedbacksRepository,
        nodemailerMailAdapter)


    await submitFeedbackUseCase.execute({
        name, email, type, comment, datatual, screenshot
    })



    return res.send("SUCESSO")
})

