"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Transforme Seu Corpo em 7 Dias com Estratégias Práticas e Naturais
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Três e-books criados para quem busca emagrecimento rápido, saúde e bem-estar —
          sem academia, sem dietas malucas e sem sofrimento.
        </p>

        {/* PREÇO */}
        <div className="mt-10">
          <p className="text-gray-500 line-through text-lg">De R$ 53,60</p>
          <p className="text-5xl font-extrabold text-green-600 mt-1">R$ 10,00</p>
          <p className="text-sm text-red-600 font-semibold mt-1">
            ⚡ Oferta limitada — apenas hoje
          </p>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="flex justify-center gap-10 mt-4 flex-wrap px-6 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <div className="w-52 md:w-60 bg-white rounded-xl shadow-lg border p-4 hover:scale-105 transition">
          <img
            src="/mock-ebook.png"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="mt-3 font-bold text-gray-900 text-center">
            JEJUM INTERMITENTE
          </p>

          <Link
            href="/ban"
            className="block mt-4 bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-2 rounded-lg transition"
          >
            Comprar
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="w-52 md:w-60 bg-white rounded-xl shadow-lg border p-4 hover:scale-105 transition">
          <img
            src="/ebook-termogenico.png"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="mt-3 font-bold text-gray-900 text-center">
            Chá Termogênico
          </p>

          <a
            href="/ban"
            target="_blank"
            className="block mt-4 bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-2 rounded-lg transition"
          >
            Comprar
          </a>
        </div>

        {/* CARD 3 – BÔNUS */}
        <div className="w-52 md:w-60 bg-white rounded-xl shadow-lg border p-4">
          <img
            src="/ebook-detox.png"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="mt-3 font-bold text-gray-900 text-center">
            Exercícios Fáceis em Casa (Bônus)
          </p>
        </div>
      </section>

      {/* ================= OFERTA ESPECIAL ================= */}
      <section className="w-full bg-gray-900 text-white py-12 px-6 rounded-2xl mt-12 shadow-xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Oferta Especial
        </h2>

        <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Ao adquirir o <strong>Ebook JEJUM INTERMITENTE</strong> +
          o <strong>Ebook Chá Termogênico</strong>, você ganha
          <span className="text-green-400 font-bold"> totalmente de graça </span>
          o <strong>Ebook Exercícios Fáceis em Casa</strong>.
        </p>

        <div className="text-center mt-6">
          <Link
            href="/ban"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-black transition"
          >
            Garantir Meu Pacote
          </Link>
        </div>
      </section>

      {/* ================= CTA PRINCIPAL ================= */}
      <div className="text-center mt-12">
        <Link
          href="/ban"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl text-xl transition shadow-lg"
        >
          Garantir Agora por Apenas R$ 10
        </Link>
        <p className="mt-2 text-sm text-gray-500">
          Pagamento seguro · Acesso imediato
        </p>
      </div>

      {/* ================= BENEFÍCIOS ================= */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            O Que Você Vai Encontrar
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Conteúdos diretos ao ponto e focados em resultados rápidos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              ["Plano Alimentar Completo", "Cardápio de 7 dias simples e acessível."],
              ["Aceleração do Metabolismo", "Estratégias naturais para queimar mais."],
              ["Receitas Termogênicas", "Chás potentes para acelerar resultados."],
              ["Rotina Anti-Inchaço", "Ative o corpo em apenas 10 minutos."]
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white shadow-lg rounded-xl">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/ban"
            className="inline-block mt-12 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl text-xl transition"
          >
            Quero começar agora
          </Link>
        </div>
      </section>

      {/* ================= RESULTADOS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold">Resultados Reais</h2>
          <p className="text-gray-600 mt-3">
            Pessoas comuns seguindo o mesmo método.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["/antes-depois1.png", "7 dias de protocolo"],
              ["/PARA.png", "Emagrecimento acelerado"],
              ["/aaaa.jpg", "Redução de inchaço"]
            ].map(([img, label]) => (
              <div key={img} className="bg-white shadow-xl rounded-xl p-4">
                <img src={img} className="w-full rounded-lg object-cover" />
                <p className="mt-2 text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GARANTIA ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-gray-700 mt-4">
            Não gostou? Devolvemos 100% do valor. Sem burocracia.
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Perguntas Frequentes
        </h2>

        <div className="mt-8 space-y-6">
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              É possível perder 5kg em 7 dias?
            </summary>
            <p className="text-gray-600 mt-2">
              Sim método reduz inchaço e acelera o metabolismo.
              
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Serve para iniciantes?
            </summary>
            <p className="text-gray-600 mt-2">
              Sim, tudo é passo a passo.
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              O acesso é imediato?
            </summary>
            <p className="text-gray-600 mt-2">
              Sim, após pagamento na Kiwify.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}
