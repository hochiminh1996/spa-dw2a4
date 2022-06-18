import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    name: string,
    email: string,
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) { }


    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { name, email, type, comment, screenshot } = request;

        if(!name) {
            throw new Error('Type is required.');
        }

        if(!email) {
            throw new Error('Type is required.');
        }

        if(!comment) {
            throw new Error('Type is required.');
        }


        if(!comment) {
            throw new Error('Type is required.');
        }


        if (!type) {
            throw new Error('Type is required.');
        }

        if (!comment) {
            throw new Error('Type is required.');
        }


        if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot form")
        }



        await this.feedbacksRepository.create({
            name,
            email,
            type,
            comment,
            screenshot,
        })


        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                `</div>`
            ].join('\n')
        })
    }
}