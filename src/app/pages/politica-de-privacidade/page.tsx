"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "../home/components/Footer";

export default function PoliticasDePrivacidade() {
    return (
        <section>
            <Navbar />
            <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Política de Privacidade</h1>
                <div className="text-left max-w-4xl mx-auto mb-8">
                    <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                        A Política de Privacidade do site de doações foi elaborada para demonstrar nosso compromisso com a segurança e privacidade das informações dos nossos usuários. Ao acessar e utilizar nossos serviços, você concorda com os termos abaixo apresentados.
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">1. Coleta de Informações</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Para oferecer uma experiência personalizada, coletamos informações pessoais fornecidas voluntariamente, como nome, e-mail, informações de pagamento, entre outras necessárias para processar doações e fornecer suporte adequado.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">2. Uso das Informações</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                As informações coletadas são usadas exclusivamente para processar doações, melhorar nossos serviços, enviar comunicações sobre campanhas e personalizar a experiência do usuário. Não compartilhamos informações pessoais com terceiros sem consentimento prévio.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">3. Segurança dos Dados</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                A segurança dos dados dos usuários é nossa prioridade. Implementamos medidas físicas, eletrônicas e processuais para proteger informações contra acesso não autorizado, alteração, divulgação ou destruição.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">4. Uso de Cookies</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Para melhorar a navegação, utilizamos cookies que são pequenos arquivos de texto armazenados no seu dispositivo para personalizar conteúdos, realizar análises de tráfego e lembrar preferências.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">5. Alterações na Política de Privacidade</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento para refletir mudanças em nossos serviços ou conformidade com as leis aplicáveis. Recomendamos revisar periodicamente para estar ciente de atualizações.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">6. Acesso e Controle das Informações Pessoais</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Os usuários têm o direito de acessar e atualizar suas informações pessoais. Caso deseje alterar ou excluir informações, entre em contato conosco para assistência.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">7. Compartilhamento de Informações</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Não compartilhamos informações pessoais com terceiros, exceto quando necessário para processar doações ou conforme exigido por lei.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">8. Retenção de Dados</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Mantemos informações pessoais pelo tempo necessário para cumprir com nossas obrigações legais ou para os fins específicos para os quais foram coletadas.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">9. Links Externos</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Nosso site pode conter links para sites externos. Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">10. Consentimento</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Ao utilizar nosso site, você consente com a coleta e uso de suas informações pessoais conforme descrito nesta Política de Privacidade.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">11. Contato</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Para quaisquer dúvidas ou preocupações sobre nossa Política de Privacidade ou o tratamento de seus dados pessoais, entre em contato conosco através dos meios disponibilizados em nosso site.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300">12. Efetividade</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Esta Política de Privacidade é efetiva a partir da data de sua publicação e aplica-se a todos os usuários que acessam nosso site a partir dessa data.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                    Ao acessar e utilizar nosso site, você concorda com os termos desta Política de Privacidade. Para mais informações sobre como tratamos seus dados pessoais, entre em contato conosco. Estamos aqui para fornecer o suporte necessário.
                </p>
            </div>
            <Footer />
        </section>
    );
}
