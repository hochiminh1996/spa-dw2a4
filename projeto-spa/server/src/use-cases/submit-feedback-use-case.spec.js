"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe("SubmitFeedbackUseCase", () => {
    it("should be able to submit feedback", async () => {
        await expect(submitFeedback.execute({
            name: "Felippe imagem",
            email: "teste@gmail.com",
            type: "BUG",
            comment: "A example",
            screenshot: "data:image/png;base64, imagem",
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it("should not be able to submit feedback without type", async () => {
        await expect(submitFeedback.execute({
            name: "Felippe imagem",
            email: "teste@gmail.com",
            type: "",
            comment: "A example",
            screenshot: "data:image/png;base64, imagem",
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            name: "Felippe imagem",
            email: "teste@gmail.com",
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback with an invalid image', async () => {
        await expect(submitFeedback.execute({
            name: "Felippe imagem",
            email: "teste@gmail.com",
            type: 'BUG',
            comment: 'example comment',
            screenshot: '123.test',
        })).rejects.toThrow();
    });
});
