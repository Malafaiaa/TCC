import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import style from '../section.module.css'

export default function SectionDuvidas(props: any) {
    return (
        <section className={style.section_duvidas} id={style.section_duvidas}>
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Perguntas Frequentes</h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-b-0 border-gray-300 rounded-t-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Posso doar itens físicos ou apenas dinheiro?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Somente doações de forma digital, como pix e outros meios de pagamento!                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-b-0 border-gray-300 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Posso escolher para onde minha doação será direcionada?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Sim, ao fazer a doação, você pode selecionar um projeto ou causa específica para onde gostaria que seu dinheiro fosse destinado.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-b-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Como posso ter certeza de que minha doação está sendo usada corretamente?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Somos uma organização transparente e publicamos relatórios financeiros anuais detalhando como as doações são utilizadas.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}