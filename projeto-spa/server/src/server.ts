import { prisma } from "./prisma";
import express from "express"
import nodemailer from "nodemailer";


const app = express();

app.use(express.json());//verifica se há json na requisição

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0449ac2d2878c6",
      pass: "b369909ccbb000"
    }
  });

app.post('/feedbacks', async (req, res) => {

    const { name, email, type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            name,
            email,
            type,
            comment,
            screenshot
        }
    })

    transport.sendMail({
       from: "Equipe : <teste@hotmail.com",
       to: "Felippe : <ambrsp@hotmail.com>",
       subject:"Problema no site",
       html: [
            `<div style="font-family:arial; font-size: 16px;">`,
            `<p> Tipo do feedback : ${type}</p>`,	
            `<p> Comentário : ${comment}</p>`,	
            `</div>`
       ].join("\n")
    });

    return res.status(201).json({data: feedback})
    // res.send("Deu bom");
})

app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING!!");
})