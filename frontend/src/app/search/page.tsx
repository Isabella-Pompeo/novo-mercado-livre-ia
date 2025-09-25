import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Added useRouter

// Filter Data
const categories = [
  { id: 'marketing', name: 'Marketing' },
  { id: 'vendas', name: 'Vendas' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'analise-dados', name: 'Análise de Dados' },
  { id: 'financas', name: 'Finanças' },
];

const languages = [
  { id: 'javascript', name: 'Javascript' },
  { id: 'python', name: 'Python' },
  { id: 'ruby', name: 'Ruby' },
  { id: 'php', name: 'PHP' },
  { id: 'java', name: 'Java' },
];

const compatibilities = [
  { id: 'google-sheets', name: 'Google Sheets' },
  { id: 'salesforce', name: 'Salesforce' },
  { id: 'slack', name: 'Slack' },
  { id: 'jira', name: 'Jira' },
  { id: 'trello', name: 'Trello' },
  { id: 'notion', name: 'Notion' },
];

// Mock Product Data (will be replaced by API fetch)
const mockProductsData = [
  { id: 1, name: 'Agente de Automação de E-mail Marketing', price: 'R$ 49,90', rating: 4.8, imageUrl: '/placeholder-product.png', category: 'Marketing', language: 'javascript', compatibility: ['slack', 'notion'] },
  { id: 2, name: 'Agente de Integração de CRM', price: 'R$ 79,90', rating: 4.9, imageUrl: '/placeholder-product.png', category: 'Vendas', language: 'python', compatibility: ['salesforce', 'google-sheets'] },
  { id: 3, name: 'Agente de Análise de Dados', price: 'R$ 65,00', rating: 4.7, imageUrl: '/placeholder-product.png', category: 'Análise de Dados', language: 'python', compatibility: ['google-sheets', 'jira'] },
  { id: 4, name: 'Agente de Automação de E-commerce', price: 'R$ 99,00', rating: 4.5, imageUrl: '/placeholder-product.png', category: 'E-commerce', language: 'php', compatibility: ['slack', 'trello'] },
  { id: 5, name: 'Agente de Gestão Financeira', price: 'R$ 55,00', rating: 4.6, imageUrl: '/placeholder-product.png', category: 'Finanças', language: 'javascript', compatibility: ['google-sheets', 'notion'] },
  { id: 6, name: 'Agente de Automação de Redes Sociais', price: 'R$ 70,00', rating: 4.7, imageUrl: '/placeholder-product.png', category: 'Marketing', language: 'javascript', compatibility: ['slack', 'trello'] },
];


export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize router
  const initialQuery = searchParams.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCompatibilities, setSelectedCompatibilities] = useState([]);

  // Accordion states for filters
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const [isCompatibilityOpen, setIsCompatibilityOpen] = useState(true);

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'category':
        setSelectedCategories(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'language':
        setSelectedLanguages(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'compatibility':
        setSelectedCompatibilities(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchAndFilterProducts = () => {
      setLoading(true);
      setError(null);
      try {
        let filtered = mockProductsData;

        // Apply search query filter
        if (initialQuery) {
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(initialQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(initialQuery.toLowerCase())
          );
        }

        // Apply category filters
        if (selectedCategories.length > 0) {
          filtered = filtered.filter(product => selectedCategories.includes(product.category.toLowerCase()));
        }

        // Apply language filters
        if (selectedLanguages.length > 0) {
          filtered = filtered.filter(product => selectedLanguages.includes(product.language.toLowerCase()));
        }

        // Apply compatibility filters
        if (selectedCompatibilities.length > 0) {
          filtered = filtered.filter(product =>
            product.compatibility.some(comp => selectedCompatibilities.includes(comp.toLowerCase()))
          );
        }

        setSearchResults(filtered);

      } catch (err) {
        setError("Erro ao buscar produtos. Tente novamente mais tarde.");
        console.error("Search filter error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilterProducts();
  }, [initialQuery, selectedCategories, selectedLanguages, selectedCompatibilities]); // Re-fetch/filter if any of these change

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Persistent Search Bar */}
      <section className="bg-white dark:bg-gray-800 shadow-md py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-2xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="O que você precisa automatizar hoje? Ex: Marketing, Vendas, E-commerce..."
              className="w-full px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Buscar
            </button>
          </form>
        </div>
      </section>

      <main className="flex flex-1 max-w-4xl mx-auto w-full py-8">
        {/* Filter Sidebar */}
        <aside className="w-1/4 pr-8 hidden md:block">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Filtros</h3>

          {/* Category Filter */}
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 focus:outline-none"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <span>Categorias</span>
              <span>{isCategoryOpen ? '-' : '+'}</span>
            </button>
            {isCategoryOpen && (
              <div className="ml-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center mb-1 text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleFilterChange('category', cat.id)}
                    />
                    {cat.name}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Language Filter */}
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 focus:outline-none"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <span>Linguagem de Programação</span>
              <span>{isLanguageOpen ? '-' : '+'}</span>
            </button>
            {isLanguageOpen && (
              <div className="ml-2">
                {languages.map((lang) => (
                  <label key={lang.id} className="flex items-center mb-1"