import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0449ac2d2878c6",
        pass: "b369909ccbb000"
    }
});



export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'equipe fedget <oi@feedget.com>',
        to: 'Felipppe <ambrsp@hotmal.com>',
        subject,
        html: body,
      });
    }
  }