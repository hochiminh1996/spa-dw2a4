import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    onFeebackTypeChanged: (type: FeedbackType) => void;
}



export function FeedbackTypeStep({ onFeebackTypeChanged }: FeedbackContentStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
                {/* ICONE de fechar */}
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button key={key}
                            onClick={() => onFeebackTypeChanged(key as FeedbackType)}
                            className="bg-zinc-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#09f] focus:border-[#09f] focus:outline-none"
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    );
}