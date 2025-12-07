export default function BannersPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-12 md:pt-20">
      <div className="w-full max-w-5xl space-y-12 px-4">

        {/* ===== Banner 1 ===== */}
        <section
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border-l-8 border-green-500 
          flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center md:min-w-[300px]">
            <img
              src="/mock-ebook.png"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              alt="Perca 5kg em 7 Dias"
            />

            <a
              href="https://pay.kiwify.com.br/3QYbBtz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full md:w-auto"
            >
              <button className="w-full px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">
                Comprar Agora
              </button>
            </a>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              JEJUM INTERMITENTE
            </h2>

            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Método <strong>100% natural</strong> para eliminar gordura rápido,
              sem academia, sem remédios e sem passar fome.
            </p>

            <p className="text-gray-700 mt-2">
              Ideal para quem quer <strong>resultado imediato</strong>.
            </p>
          </div>
        </section>

        {/* ===== Banner 2 ===== */}
        <section
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border-l-8 border-blue-500 
          flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center md:min-w-[300px]">
            <img
              src="/ebook-termogenico.png"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              alt="Chá Termogênico Natural"
            />

            <a
              href="https://pay.kiwify.com.br/64ko67U"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full md:w-auto"
            >
              <button className="w-full px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Comprar Agora
              </button>
            </a>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Chá Termogênico Natural
            </h2>

            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Receita poderosa que <strong>acelera o metabolismo</strong> e
              aumenta a queima de gordura nos primeiros dias.
            </p>

            <p className="text-gray-700 mt-2">
              Ingredientes simples e preparo rápido.
            </p>
          </div>
        </section>

        {/* ===== Banner 3 – KIT ===== */}
        <section
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border-l-8 border-purple-500 
          flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center md:min-w-[300px]">
            <img
              src="/3a.png"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              alt="Kit Emagrecimento + Bônus"
            />

            <a
              href="https://pay.kiwify.com.br/QLEhOkL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full md:w-auto"
            >
              <button className="w-full px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition">
                Comprar Agora
              </button>
            </a>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Compre os 2 Guias e Leve o Programa de Exercícios 100% GRÁTIS
            </h2>

            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Ao adquirir os dois guias, você recebe este
              <strong> bônus exclusivo</strong> para acelerar seus resultados.
            </p>

            <p className="text-gray-700 mt-2">
              Exercícios simples, sem equipamentos, para fazer em casa.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
