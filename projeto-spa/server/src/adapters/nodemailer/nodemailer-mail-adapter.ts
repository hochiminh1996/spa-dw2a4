import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";



//SERVIÇO PARA TRANSPORTE DE EMAIL
// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "b7e1c14fe8aba4",
//         pass: "af865f08d71f97"
//     }
// });
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0449ac2d2878c6",
      pass: "b369909ccbb000"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Felippe Marques <ambrsp@hotmail.com>",
            subject,
            html: body,
        });
    }
}