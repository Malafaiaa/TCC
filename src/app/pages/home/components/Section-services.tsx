import style from '../section.module.css'


export default function SectionServices(props: any) {
    return (<>

        <section className={style.section_services} id='section-services'>
            <div className={style.container_section_services}>


                <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Além disso</h1>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Doar nunca foi tão fácil !</h1>
                <p className="mb-6 text-lg max-w-screen-xl text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Facilitamos o processo de doação para seus apoiadores, proporcionando uma experiência intuitiva e segura. Com apenas alguns cliques, eles podem contribuir para sua causa de maneira rápida e eficaz.</p>
                <p className="mb-6  inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Veja o passo a passo
                </p>


                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="varimb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Primeiro passo</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Crie uma conta em nosso site</h3>
                        <p className="max-w-screen-lg  mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Registre-se para começar a usar nossa plataforma dedicada à captação de recursos para organizações sem fins lucrativos. Facilitamos o processo para que você possa começar rapidamente.</p>
                        <a href="/pages/register" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Criar a conta <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Segundo passo</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Escolha qualquer empresa de doação</h3>
                        <p className="max-w-screen-lg  text-base font-normal text-gray-500 dark:text-gray-400">Personalize sua experiência escolhendo entre várias opções de empresas de doação. Encontre a melhor forma de apoiar sua causa e fazer a diferença na vida de muitos.</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Terceiro passo</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Realize a sua doação</h3>
                        <p className="max-w-screen-lg  text-base font-normal text-gray-500 dark:text-gray-400">Faça sua doação de maneira simples e segura. Com apenas alguns passos, você pode contribuir diretamente para iniciativas que transformam vidas e fortalecem comunidades.</p>
                    </li>

                </ol>





            </div>
            

        </section>
      

    </>)
}