import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

// Styles are typically applied globally via layout.tsx, but can be imported here if needed for specific page styles.
// import "./globals.css"; 

// Font definitions - assuming these are handled by the root layout.tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Placeholder data for agents
const agents = [
  {
    id: "marketing",
    name: "Agente de Automação de Marketing",
    description: "Automações para campanhas, e-mails e redes sociais.",
    imageUrl: "/placeholder-agent-marketing.png", // Placeholder image
    price: "49.90",
    rating: "4.8",
  },
  {
    id: "vendas",
    name: "Agente de Integração de CRM",
    description: "Otimize seu funil de vendas e CRM.",
    imageUrl: "/placeholder-agent-sales.png", // Placeholder image
    price: "79.90",
    rating: "4.9",
  },
  {
    id: "ecommerce",
    name: "Agente de Automação de E-commerce",
    description: "Integrações para sua loja virtual.",
    imageUrl: "/placeholder-agent-ecommerce.png", // Placeholder image
    price: "65.00",
    rating: "4.7",
  },
  {
    id: "financeiro",
    name: "Agente de Gestão Financeira",
    description: "Controle suas finanças com precisão.",
    imageUrl: "/placeholder-agent-finance.png", // Placeholder image
    price: "55.00",
    rating: "4.6",
  },
  {
    id: "suporte",
    name: "Agente de Atendimento ao Cliente",
    description: "Melhore a experiência do seu cliente.",
    imageUrl: "/placeholder-agent-support.png", // Placeholder image
    price: "40.00",
    rating: "4.5",
  },
];

// All Agents Page Component
export default function AgentsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Todos os Agentes de Automação
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <Image
                src={agent.imageUrl}
                alt={agent.name}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{agent.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{agent.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-blue-600">R$ {agent.price}</span>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="ml-1 text-gray-700 dark:text-gray-300">{agent.rating}</span>
                </div>
              </div>
              <a
                href={`/agents/${agent.id}`} // Link para a página de detalhes do agente
                className="block w-full text-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Ver Detalhes
              </a>
            </div>
          ))}
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