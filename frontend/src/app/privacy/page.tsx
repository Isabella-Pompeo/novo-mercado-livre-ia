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

// Privacy Policy Page Component
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Política de Privacidade
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300 text-left space-y-6">
          <p>
            Na Agentes de Automação IA, valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos seus dados.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">1. Coleta de Informações</h2>
          <p>
            Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, preenche um formulário, entra em contato conosco ou interage com nossos serviços. Isso pode incluir seu nome, endereço de e-mail, número de telefone e outras informações relevantes.
          </p>
          <p>
            Também coletamos informações automaticamente quando você usa nossos serviços, como dados de uso, informações de dispositivo e cookies.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">2. Uso das Informações</h2>
          <p>
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fornecer, manter e melhorar nossos serviços.</li>
            <li>Processar suas transações e enviar notificações relacionadas.</li>
            <li>Comunicar com você sobre atualizações, ofertas e suporte.</li>
            <li>Personalizar sua experiência em nossa plataforma.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais a terceiros. Podemos compartilhar suas informações com prestadores de serviços que nos auxiliam na operação de nossos negócios, desde que concordem em manter a confidencialidade dessas informações.
          </p>
          <p>
            Também podemos divulgar suas informações se exigido por lei ou para proteger nossos direitos, propriedade ou segurança.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">4. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Você também pode optar por não receber comunicações de marketing. Para exercer esses direitos, entre em contato conosco.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com a data de "Última Atualização" revisada. Recomendamos que você revise esta política periodicamente.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última Atualização: 22 de Setembro de 2025
          </p>
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