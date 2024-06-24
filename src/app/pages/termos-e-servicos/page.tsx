"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "../home/components/Footer";

export default function TermosEServicos() {
    return (
        <section>
            <Navbar />
            <div className="text-justify py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Termos e Serviços</h1>
                <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">Bem-vindo aos Termos de Serviço do site de doações. Ao acessar e utilizar nossos serviços, você concorda com os termos e condições descritos abaixo. É essencial que você leia atentamente estes termos antes de utilizar nosso site.</p>
                
                <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">1. Aceitação dos Termos</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">1.1. Ao utilizar nossos serviços, você concorda em obedecer a estes Termos de Serviço e à nossa Política de Privacidade. Se você não concorda com algum dos termos aqui descritos, por favor, não utilize nosso site.</p>
                </div>

                <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">2. Uso dos Serviços</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">2.1. Você é responsável por fornecer informações verdadeiras, precisas, atuais e completas conforme solicitado em nosso processo de cadastro.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">2.2. Você concorda em manter a confidencialidade de sua conta e senha, e é responsável por todas as atividades que ocorram sob sua conta.</p>
                </div>

                <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">3. Coleta e Uso de Informações</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">3.1. Coletamos informações pessoais fornecidas voluntariamente por você, como nome, endereço de e-mail, informações de pagamento, e outros dados necessários para processar sua doação ou oferecer suporte adequado.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">3.2. As informações coletadas são utilizadas exclusivamente para processar doações, melhorar nossos serviços, enviar comunicações sobre campanhas e novidades, e personalizar a experiência do usuário. Não compartilhamos informações pessoais com terceiros sem seu consentimento prévio, exceto quando exigido por lei.</p>
                </div>

                <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">4. Segurança dos Dados</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">4.1. Implementamos medidas de segurança físicas, eletrônicas e processuais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">4.2. Utilizamos práticas padrão do setor para garantir a integridade e segurança dos dados pessoais dos usuários.</p>
                </div>

                <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">5. Cookies e Tecnologias Similares</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">5.1. Nosso site pode utilizar cookies e tecnologias similares para melhorar a experiência dos usuários, personalizar conteúdos, realizar análises de tráfego e lembrar preferências de navegação.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">5.2. Você pode controlar o uso de cookies através das configurações do seu navegador. Ao continuar a usar nosso site sem alterar suas configurações de cookies, você consente com o uso de cookies de acordo com esta política.</p>
                </div>

                <div>
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">6. Modificações nos Termos de Serviço</h2>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">6.1. Reservamo-nos o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento, para refletir mudanças em nossos serviços ou em conformidade com as leis aplicáveis.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">6.2. Alterações significativas serão comunicadas através de nosso site ou por e-mail. O uso contínuo de nossos serviços após a publicação de alterações nos Termos de Serviço constitui sua aceitação dessas alterações.</p>
                </div>
            </div>
            <Footer />
        </section>
    );
}
