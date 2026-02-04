export default function Services() {
    const services = [
        {
            name: 'Backend & API Engineering',
            icon: '/assets/web-icon.png',
            description: 'Designing and building high-performance APIs, microservices, and data pipelines using Python, FastAPI, Django, and Node.js.',
            link: '#',
        },
        {
            name: 'AI & LLM Solutions',
            icon: '/assets/ui-icon.png',
            description: 'Building LLM-powered applications with LangChain, RAG pipelines, semantic search, and AI integrations that solve real business problems.',
            link: '#',
        },
        {
            name: 'Full-Stack Web Applications',
            icon: '/assets/mobile-icon.png',
            description: 'Developing modern, scalable web applications using React, Next.js, Vue.js, Angular, and TypeScript, from architecture to deployment.',
            link: '#',
        },
        {
            name: 'Design, scale, and mentor',
            icon: '/assets/graphics-icon.png',
            description: 'Leading system design, improving performance and reliability, and collaborating with teams to deliver maintainable, scalable solutions.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"> I specialize in backend architecture and distributed system design using Python, FastAPI, Django, and Node.js, and build frontend applications with React, Next.js, Vue.js, Angular, and TypeScript, with additional experience in PHP, Laravel, and Shopify. I have hands-on experience delivering AI and LLM-powered features using LangChain, RAG pipelines, and semantic search, and building production APIs and data pipelines that support real business workflows.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}