export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER - Apenas no topo, sem linha azul */}
      <header className="w-full bg-black/60 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO + CATEGORIAS */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center transition hover:scale-105">
              <img
                src="/logo.png"
                alt="Logo WYD Hell"
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_24px_rgba(59,130,246,1)]"
              />
            </a>

            {/* CATEGORIAS */}
            <nav className="hidden lg:flex gap-4">
              {[
                { nome: "TOPO", link: "topo" },
                { nome: "MEIO", link: "meio" },
                { nome: "BAIXO", link: "baixo" },
                { nome: "CAPA", link: "capa" },
                { nome: "CONSUMÍVEIS", link: "consumiveis" },
              ].map((cat) => (
                <a
                  key={cat.nome}
                  href={`/loja?categoria=${cat.link}`}
                  className="px-4 py-2 text-xs font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all duration-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
                >
                  {cat.nome}
                </a>
              ))}
            </nav>
          </div>

          {/* MENU DIREITA */}
          <nav className="flex gap-3">
            {[
              { nome: "INÍCIO", link: "/" },
              { nome: "LOJA", link: "/loja" },
              { nome: "CONTATO", link: "/contato" },
            ].map((item) => (
              <a
                key={item.nome}
                href={item.link}
                className="px-5 py-2 text-sm font-semibold uppercase rounded-full border border-blue-500/30 text-gray-300 transition-all duration-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
              >
                {item.nome}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* BANNER */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center mt-6"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] tracking-wide">
            4S STORE
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] uppercase tracking-widest">
            Rápido e Barato
          </p>
          <a
            href="/loja"
            className="px-10 py-4 bg-blue-600 rounded-lg text-lg font-bold hover:bg-blue-700 transition inline-block shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            Ver Loja
          </a>
        </div>
      </section>

      {/* CARDS DE PROMOÇÃO */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
          Promoções
        </h3>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group w-full md:w-80 bg-black/60 backdrop-blur rounded-2xl border border-blue-500/30 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
            >
              <div className="h-64 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 text-sm">IMAGEM DA PROMOÇÃO</span>
              </div>
              <div className="p-5 text-center">
                <h4 className="text-xl font-bold mb-2 text-blue-300">TÍTULO DA PROMOÇÃO</h4>
                <p className="text-sm text-gray-400 mb-4">Descrição curta da promoção</p>
                <button className="px-5 py-2 text-sm font-semibold rounded-full border border-blue-500/30 text-blue-300 transition hover:text-white hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                  Ver Oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRIADORES DE CONTEÚDO */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
          Criadores de Conteúdo
        </h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              nome: "Creator1",
              links: {
                youtube: "https://youtube.com/creator1",
                twitch: "https://twitch.tv/creator1",
                kick: "https://kick.com/creator1"
              }
            },
            {
              nome: "Creator2",
              links: {
                youtube: "https://youtube.com/creator2",
                twitch: "https://twitch.tv/creator2",
                kick: "https://kick.com/creator2"
              }
            },
            {
              nome: "Creator3",
              links: {
                youtube: "https://youtube.com/creator3",
                twitch: "https://twitch.tv/creator3",
                kick: "https://kick.com/creator3"
              }
            }
          ].map((creator) => (
            <div
              key={creator.nome}
              className="w-64 bg-black/60 backdrop-blur rounded-2xl border border-blue-500/30 p-6 flex flex-col items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 text-xl font-bold">
                {creator.nome.charAt(0)}
              </div>
              <h4 className="text-lg font-bold text-blue-300">{creator.nome}</h4>
              <div className="flex gap-4">
                <a href={creator.links.youtube} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a2.988 2.988 0 0 0-2.104-2.11C19.356 3.5 12 3.5 12 3.5s-7.356 0-9.394.576a2.988 2.988 0 0 0-2.104 2.11A31.36 31.36 0 0 0 0 12a31.36 31.36 0 0 0 .502 5.814 2.988 2.988 0 0 0 2.104 2.11c2.038.576 9.394.576 9.394.576s7.356 0 9.394-.576a2.988 2.988 0 0 0 2.104-2.11A31.36 31.36 0 0 0 24 12a31.36 31.36 0 0 0-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/>
                  </svg>
                </a>
                <a href={creator.links.twitch} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                  <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#9146FF" d="M80 32L32 128v352h128v64l64-64h96l128-128V32H80z"/>
                    <path fill="#fff" d="M320 192h32v128h-32V192zm-96 0h32v128h-32V192z"/>
                  </svg>
                </a>
                <a href={creator.links.kick} target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"/>
                    <text x="12" y="16" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">K</text>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold transition shadow-[0_0_25px_rgba(59,130,246,0.9)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
          <path d="M16.003 2.003C8.825 2.003 3.003 7.826 3.003 15.003c0 2.647.775 5.114 2.11 7.192L3 30l7.98-2.092a12.94 12.94 0 0 0 5.023 1.012c7.177 0 12.999-5.823 12.999-12.999S23.18 2.003 16.003 2.003zm0 23.644a10.61 10.61 0 0 1-4.536-1.01l-.326-.15-4.73 1.24 1.26-4.607-.212-.36a10.58 10.58 0 0 1-1.462-5.46c0-5.86 4.77-10.63 10.63-10.63 5.86 0 10.63 4.77 10.63 10.63 0 5.86-4.77 10.63-10.63 10.63zm5.847-7.986c-.319-.159-1.884-.93-2.174-1.036-.29-.106-.502-.159-.714.159-.212.319-.82 1.036-1.006 1.249-.186.212-.372.239-.69.08-.319-.159-1.345-.496-2.563-1.58-.947-.844-1.587-1.884-1.774-2.203-.186-.319-.02-.49.14-.649.143-.142.319-.372.479-.558.159-.186.212-.319.319-.531.106-.212.053-.399-.026-.558-.08-.159-.714-1.726-.978-2.363-.258-.62-.52-.536-.714-.546l-.61-.011c-.212 0-.558.08-.85.399-.292.319-1.118 1.092-1.118 2.665 0 1.573 1.144 3.095 1.304 3.307.159.212 2.252 3.445 5.455 4.828.762.328 1.357.524 1.82.67.765.243 1.462.209 2.012.127.614-.091 1.884-.769 2.149-1.512.265-.743.265-1.38.186-1.512-.079-.132-.292-.212-.61-.371z" />
        </svg>
        WhatsApp
      </a>

    </main>
  );
}
