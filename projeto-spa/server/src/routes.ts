import express from "express";
import nodemailer from "nodemailer";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
export const routes = express.Router();





routes.post('/feedbacks', async (req, res) => {

    const { name, email, type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository,nodemailerMailAdapter);

    await submitFeedbackUseCase.execute({
        name, email, type, comment, screenshot,
    })
    
    // transport.sendMail({
    //    from: "Equipe : <teste@hotmail.com",
    //    to: "Felippe : <ambrsp@hotmail.com>",
    //    subject:"Problema no site",
    //    html: [
    //         `<div style="font-family:arial; font-size: 16px;">`,
    //         `<p> Tipo do feedback : ${type}</p>`,	
    //         `<p> Comentário : ${comment}</p>`,	
    //         `</div>`
    //    ].join("\n")
    // });

    return res.status(201).send();
    // res.send("Deu bom");
})