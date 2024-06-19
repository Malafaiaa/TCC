import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import style from '../section.module.css';

export default function SectionDuvidas() {
    return (
        <section className={style.section_duvidas} id={style.section_duvidas}>
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Perguntas Frequentes</h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-b-0 border-gray-300 rounded-t-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Como são utilizados os recursos doados por instituições?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Os recursos doados são usados para financiar nossos projetos e programas sociais. Garantimos total transparência e prestamos contas regularmente sobre como os fundos são aplicados.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-b-0 border-gray-300 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Quais são os critérios para que minha instituição possa se tornar uma parceira?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Avaliamos parcerias com base na missão, valores e capacidade de contribuição da instituição. Estamos abertos a colaborar com organizações que compartilham nosso compromisso com o impacto social positivo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-b-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Como minha instituição pode se tornar uma parceira?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Para se tornar uma parceira, preencha o formulário de parceria disponível na seção &quot;Parcerias&quot; do nosso site. Nossa equipe entrará em contato para discutir os detalhes da colaboração.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
