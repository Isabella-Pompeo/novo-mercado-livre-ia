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

// About Page Component
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Sobre Nós
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300 text-center space-y-6">
          <p>
            Bem-vindo à Agentes de Automação IA, sua plataforma definitiva para descobrir e implementar soluções de automação impulsionadas por Inteligência Artificial. Nossa missão é democratizar o acesso à automação, permitindo que empresas de todos os tamanhos simplifiquem tarefas repetitivas, otimizem fluxos de trabalho e alcancem novos patamares de eficiência.
          </p>
          <p>
            Acreditamos que a IA deve ser acessível e prática. Por isso, reunimos uma coleção curada de agentes de IA especializados em diversas áreas, desde marketing e vendas até finanças e suporte ao cliente. Cada agente é projetado para se integrar perfeitamente com suas ferramentas existentes, oferecendo uma maneira intuitiva de automatizar processos complexos sem a necessidade de conhecimento técnico aprofundado.
          </p>
          <p>
            Nossa equipe é composta por especialistas em IA, engenheiros de software e designers de experiência do usuário, todos apaixonados por criar soluções inovadoras que realmente fazem a diferença. Estamos comprometidos em fornecer uma plataforma robusta, confiável e fácil de usar, ajudando você a focar no que realmente importa: o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
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