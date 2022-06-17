// COMPONENTE DA BOLINHA E CHAMADA DE OUTROS COMPONENTES

import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from './WidgetForm';

export function Widget() {
    //COMPONENTES

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            {/* COMPONENTE FORMULÁRIO  */}
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>


            <Popover.Button className="bg-[#09f] rounded-full px-3 h-12 flex items-center group ">
                {/* ICONE BOLINHA */}
                <ChatTeardropDots className="w-6 h-6" />

                {/* Visibilidade do texto feedback com propriedades de hover e overflow acionadas ao passar o mouse */}
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2 text-white" >Feedback</span>
                </span>
            </Popover.Button>

    
        </Popover>
    )
}