// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Coluna 1 - Marca */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold mb-3">HoraDeSecar
</h2>
          <p className="text-sm text-gray-300">
           Conteúdo prático para quem quer emagrecer rápido de forma saudável. Materiais diretos, acessíveis e feitos para resultados reais.
          </p>
        </div>

        {/* Coluna 2 - Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: arturmidia0@gmail.com</li>
          </ul>
        </div>

        {/* Coluna 3 - Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61583277449672&locale=pt_BR%2F" className="hover:text-green-400 transition" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/art_uredits/" className="hover:text-green-400 transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition" aria-label="LinkedIn">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.tiktok.com/@arturmidia0?_r=1&_t=ZS-91Rvl61ur9s" className="hover:text-green-400 transition" aria-label="Twitter">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Artur Mídia — Todos os direitos reservados.
      </div>

      {/* Aviso legal simples (recomendado para tráfego pago) */}
      <p className="text-xs text-gray-500 text-center mt-2 px-6">
        Este site não é afiliado ao Facebook™ ou Meta™. Todos os nomes, logos e
        marcas pertencem aos seus respectivos proprietários.
      </p>
    </footer>
  );
}
