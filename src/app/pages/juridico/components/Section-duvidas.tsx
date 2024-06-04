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
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-b-0 border-gray-300 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Is it styled?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-b-0 border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Yes. It comes with default styles that match the other components' aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-b-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3">
                            Is it animated?
                        </AccordionTrigger>
                        <AccordionContent className="p-4 border border-gray-300 dark:border-gray-700 dark:bg-gray-900">
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}