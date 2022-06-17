import { CloseButton } from "../CloseButton";
import bugImageURL from '../../assets/bug.svg';
import ideiaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';
import praiseImageURL from '../../assets/praise.png';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeebackTypeStep";
import { FeedbackContentStep } from "./Steps/FeebackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";



// TIPOS DE FEEDBACK
export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageURL,
            alt: "Inseto imagem"
        }
    },
    IDEIA: {
        title: "Ideia",
        image: {
            source: ideiaImageURL,
            alt: "Ideia imagem"
        }
    },
    PRAISE: {
        title: "Elogio",
        image: {
            source: praiseImageURL,
            alt: "Elogio imagem"
        }
    },
    OTHER: {
        title: "Outros",
        image: {
            source: thoughtImageURL,
            alt: "Balão imagem"
        }

    }
};


export type FeedbackType = keyof typeof feedbackTypes;
// O FeedbackType será um tipo que aceitará somente dados do tipo bug, idea...

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    // O STATUS PODE SER APENAS OS QUE FOREM PASSADOS DENTRO DO TIPO FeedbackType, QUE CONTÉM IDEIA, OTHERS, BUG, PRAISE OU NULO

    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
        //usado pelo botão de retorno
    }

    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            {/* ACIMA TEMOS UM USO INTERESSANTE DE LAYOUT RESPONSIVE */}


            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}   />
            ) : (<>
                {!feedbackType ? (
                    <FeedbackTypeStep onFeebackTypeChanged={setFeedbackType} /> //chama um componente e passa uma propriedade junto

                ) : (
                    <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={() => {
                            setFeedbackSent(true)
                        }}
                    />//Chamando componente de CONTEÚDO DE CADA PÁGINA
                )}

            </>)}

            
            {/* FOOTER DO DO FORM  */}
            <footer className="text-xs text-neutral-400">
                <span>Feito por <a className="underline underline-offset-2 hover:bg-[#09f] hover:text-zinc-900 transition-all rounded" href="https://github.com/hochiminh1996" target="_blank">Felippe</a> na disciplina de DW2A4</span>
            </footer>
        </div>
    );
}