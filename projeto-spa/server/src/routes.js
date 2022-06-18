"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_mail_adapter_1 = require("./adapters/nodemailer/nodemailer-mail-adapter");
const prisma_feedbacks_repository_1 = require("./repositories/prisma/prisma-feedbacks-repository");
const submit_feedback_use_case_1 = require("./use-cases/submit-feedback-use-case");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { name, email, type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
    await submitFeedbackUseCase.execute({
        name, email, type, comment, screenshot,
    });
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
});
