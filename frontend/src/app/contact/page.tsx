import { Geist, Geist_Mono } from "next/font/google";

// Font definitions - assuming these are handled by the root layout.tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Contact Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Entre em Contato
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300 text-center space-y-6">
          <p>
            Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato conosco através dos canais abaixo. Nossa equipe terá prazer em ajudar!
          </p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> <a href="mailto:suporte@agentesautomacaoia.com" className="text-blue-600 hover:underline">suporte@agentesautomacaoia.com</a>
            </p>
            <p>
              <strong>Telefone:</strong> +55 (11) 98765-4321
            </p>
            <p>
              <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h (Horário de Brasília)
            </p>
          </div>
          <p>
            Você também pode nos enviar uma mensagem através do formulário abaixo.
          </p>
          {/* Placeholder for a contact form */}
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">Formulário de Contato</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <p>&copy; 2025 Agentes de Automação IA. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="/about" className="hover:underline">Sobre Nós</a>
            <a href="/contact" className="hover:underline">Contato</a>
            <a href="/privacy" className="hover:underline">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}