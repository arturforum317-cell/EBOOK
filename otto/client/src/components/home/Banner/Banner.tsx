"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white text-black">
      
      {/* HERO */}
<section className="px-6 py-16 text-center max-w-6xl mx-auto">

  {/* TÍTULO */}
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
    Guias Práticos para Transformar Seu Corpo e Sua Saúde
  </h1>

  {/* SUBTÍTULO */}
  <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
    Aprenda métodos simples, naturais e acessíveis para acelerar o emagrecimento, aumentar energia e melhorar o bem-estar. Cada e-book traz estratégias diretas, passo a passo claros e mudanças fáceis de aplicar no dia a dia.
  </p>

 {/* CARDS DOS E-BOOKS EM FILEIRA */}
<div className="flex justify-center gap-8 mt-12 flex-wrap">

  {/* EBOOK 1 */}
  <div className="w-48 md:w-60 bg-white rounded-xl shadow-xl border p-4 hover:scale-105 transition">
    <img
      src="/mock-ebook.png"
      alt="E-book Perca 5kg em 7 dias"
      className="w-full h-64 object-cover rounded-lg"
    />
    <p className="mt-3 font-semibold text-gray-900 text-center text-sm md:text-base">
      Perca 5kg em 7 Dias
    </p>

    <a
      href="https://pay.kiwify.com.br/3QYbBtz"
      className="block mt-4 bg-orange-600 hover:bg-orange-700 text-white text-center font-semibold py-2 rounded-lg transition"
    >
      Comprar
    </a>
  </div>

  {/* EBOOK 2 */}
  <div className="w-48 md:w-60 bg-white rounded-xl shadow-xl border p-4 hover:scale-105 transition">
    <img
      src="/ebook-termogenico.png"
      alt="Guia de Chás Termogênicos"
      className="w-full h-64 object-cover rounded-lg"
    />
    <p className="mt-3 font-semibold text-gray-900 text-center text-sm md:text-base">
      Chá Termogênico
    </p>

    <a
      href="https://pay.kiwify.com.br/64ko67U"
      className="block mt-4 bg-orange-600 hover:bg-orange-700 text-white text-center font-semibold py-2 rounded-lg transition"
    >
      Comprar
    </a>
  </div>

  {/* EBOOK 3 */}
  <div className="w-48 md:w-60 bg-white rounded-xl shadow-xl border p-4 hover:scale-105 transition">
    <img
      src="/ebook-detox.png"
      alt="Protocolo Detox 3 Dias"
      className="w-full h-64 object-cover rounded-lg"
    />
    <p className="mt-3 font-semibold text-gray-900 text-center text-sm md:text-base">
      Exercícios Fáceis em Casa
    </p>

    <a
      href="https://pay.kiwify.com.br/QLEhOkL"
      className="block mt-4 bg-orange-600 hover:bg-orange-700 text-white text-center font-semibold py-2 rounded-lg transition"
    >
      Comprar
    </a>
  </div>

</div>
  {/* BOTÃO + PREÇO */}
  <div className="mt-10">
  

    <div className="mt-4">
      <span className="text-gray-500 line-through text-lg">De R$ 53,60</span>

      <span className="text-4xl font-extrabold text-green-600 ml-2">
        R$ 10,00
      </span>
    </div>

    <p className="text-sm text-red-600 font-semibold mt-1">
      ⚡ Oferta única — Disponível apenas hoje
    </p>

    <p className="mt-2 text-sm text-gray-500">
      Compra segura pela Kiwify · Acesso imediato
    </p>
  </div>

</section>


      {/* BENEFÍCIOS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            O que você vai encontrar no e-book:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg">Plano alimentar pronto</h3>
              <p className="text-gray-600 mt-2">
                Cardápio de 7 dias detalhado, com substituições simples.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg">Aceleração metabólica</h3>
              <p className="text-gray-600 mt-2">
                Lista dos alimentos que queimam gordura naturalmente.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg">Guia de chás termogênicos</h3>
              <p className="text-gray-600 mt-2">
                Receitas simples para potencializar a queima de gordura.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg">Rotina matinal de 10 minutos</h3>
              <p className="text-gray-600 mt-2">
                Passo a passo para ativar o corpo e reduzir inchaço.
              </p>
            </div>

          </div>

          <Link
            href="#"
            className="inline-block mt-12 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl text-xl transition"
          >
            Quero começar agora
          </Link>

        </div>
      </section>
{/* PROVA SOCIAL */}
<section id="result" className="py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold">Resultados Reais</h2>
    <p className="text-gray-600 mt-4">
      Milhares de pessoas já estão transformando seus corpos com esse método.
    </p>

    {/* GRID DE ANTES E DEPOIS */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* FOTO 1 */}
      <div className="bg-white shadow-xl rounded-xl p-4">
        <img
          src="/antes-depois1.png"
          alt="Antes e depois 1"
          className="w-full rounded-lg object-cover"
        />
        <p className="mt-2 text-sm text-gray-600">Resultado em 7 dias</p>
      </div>

      {/* FOTO 2 */}
      <div className="bg-white shadow-xl rounded-xl p-4">
        <img
          src="/antes-depois2.jpg"
          alt="Antes e depois 2"
          className="w-full rounded-lg object-cover"
        />
        <p className="mt-2 text-sm text-gray-600">Perda de peso rápida</p>
      </div>

      {/* FOTO 3 */}
      <div className="bg-white shadow-xl rounded-xl p-4">
        <img
          src="/aaaa.jpg"
          alt="Antes e depois 3"
          className="w-full rounded-lg object-cover"
        />
        <p className="mt-2 text-sm text-gray-600">Redução de inchaço</p>
      </div>

    </div>
  </div>
</section>

      {/* GARANTIA */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Garantia de 7 Dias
          </h2>
          <p className="text-gray-700 mt-4">
            Se você não gostar do conteúdo por qualquer motivo,
            devolvemos 100% do valor. Sem perguntas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Perguntas Frequentes
        </h2>

        <div className="mt-8 space-y-6">
          
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              É realmente possível perder 5kg em 7 dias?
            </summary>
            <p className="text-gray-600 mt-2">
              Sim — o protocolo reduz retenção, inchaço e ativa o metabolismo,
              gerando resultados rápidos.
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              O e-book serve para iniciantes?
            </summary>
            <p className="text-gray-600 mt-2">
              Serve, é tudo explicado passo a passo e com substituições de alimentos.
            </p>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Recebo o e-book na hora?
            </summary>
            <p className="text-gray-600 mt-2">
              Sim! Após o pagamento na Kiwify, o acesso é liberado imediatamente.
            </p>
          </details>

        </div>

        

      </section>
    </div>
  );
}
