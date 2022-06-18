import { AppWindow, ArrowArcLeft, Camera, Trash } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
// import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}


export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}: FeedbackTypeStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [screenshot, setScreenShot] = useState<string | null>(null)

    const [name, setName] = useState("");//Estado para nome

    const [email, setEmail] = useState("");//Estado para email

    const [comment, setComment] = useState("");//Estado para comment

    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

      async function handleSubmitFeedback(event: FormEvent) {
       
        event.preventDefault();
        setIsSendingFeedback(true);

        
        await api.post('/feedbacks',{
            name,
            email,
            type: feedbackType,
            comment,
            screenshot
        })
        
        setIsSendingFeedback(false);

        onFeedbackSent();
    }



    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowArcLeft weight="bold" className="w-4 h-4" />

                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    {feedbackTypeInfo.title}
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                </span>

                <CloseButton />
                {/* ICONE de fechar */}
            </header>



            {/* FORMULÁRIO */}
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full flex flex-col">
                <input type="text" className="flex flex-col mb-2 bg-transparent justify-content border-[#09f]" placeholder="Nome:" required
                    onChange={event => setName(event.target.value)}
                />

                <input type="email" className="flex flex-col mb-2 bg-transparent justify-content border-[#09f]" placeholder="Email:" required
                    onChange={event => setEmail(event.target.value)}
                />

                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#09f] focus:ring-[#09f] focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 mb-5"
                    placeholder="Digite o seu feedback..."
                    onChange={event => setComment(event.target.value)}

                />

                <footer className="flex gap-2">

                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenShotTook={setScreenShot}
                    />

                    <button disabled={comment.length === 0 || isSendingFeedback}
                        type="submit" className="p-2  rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#06f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#09f] transition-colors disabled:opacity-50 disabled:hover:bg-[#09f] bg-[#09f]"

                    > {isSendingFeedback ? <Loading /> : "Enviar feedback"}</button>

                </footer>
            </form>
        </>
    );
}