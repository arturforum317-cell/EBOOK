export default function SobrePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/feb8ab4f-3fd6-4fe1-b6c9-15d5f0a507ea.png')" }}
    >
      {/* Overlay escuro para leitura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative max-w-3xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>

        <p className="text-lg leading-relaxed">
          Bem-vindo ao nosso espaço dedicado à saúde, bem-estar e transformação real.
          Acreditamos que emagrecer pode ser simples, acessível e sustentável.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Reunimos métodos práticos, receitas naturais e treinos fáceis para quem
          busca resultados reais mesmo com rotina corrida.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Nosso objetivo é ajudar você a conquistar uma vida mais leve,
          saudável e confiante.
        </p>
      </div>
    </div>
  );
}